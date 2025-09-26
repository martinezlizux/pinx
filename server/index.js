require('dotenv').config();
const express = require('express');
const OpenAI = require('openai');

const app = express();
app.use(express.json());

const MODEL = process.env.OPENAI_MODEL || 'gpt-5-mini';
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });

app.get('/.well-known/health', (req, res) => {
  res.json({ status: 'ok', model: MODEL });
});

app.post('/api/chat', async (req, res) => {
  const { input } = req.body;
  if (!input) return res.status(400).json({ error: 'input required' });

  try {
    // Use responses.create if available; guard for SDK or network absence
    const resp = await client.responses?.create?.({ model: MODEL, input })
      .catch(err => ({ error: String(err) }));

    if (!resp || resp.error) return res.status(200).json({ model: MODEL, echo: input });

    res.json({ model: MODEL, output: resp.output ?? resp });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

const port = process.env.PORT || 4000;
if (require.main === module) {
  app.listen(port, () => console.log(`Server listening on ${port} using model ${MODEL}`));
}

module.exports = app;
