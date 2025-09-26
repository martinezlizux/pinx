const request = require('supertest');
const app = require('./index');

describe('server', () => {
  test('health returns model default gpt-5-mini when not provided', async () => {
    const res = await request(app).get('/.well-known/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('model');
    expect(res.body.model).toBe('gpt-5-mini');
  });

  test('POST /api/chat echoes input when no API key', async () => {
    const res = await request(app)
      .post('/api/chat')
      .send({ input: 'hola' })
      .set('Accept', 'application/json');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('echo', 'hola');
    expect(res.body).toHaveProperty('model', 'gpt-5-mini');
  });
});
