# Pinx backend (mock)

Small Express server that demonstrates how to set `OPENAI_MODEL` (defaults to `gpt-5-mini`).

Usage:

1. Copy `.env.example` to `.env` and set `OPENAI_API_KEY` if you have one.
2. Install deps and run:

```bash
cd server
npm install
npm test
npm start
```

Endpoints:
- `GET /.well-known/health` — returns `{ status: 'ok', model }`
- `POST /api/chat` — { input } -> echoes back when OpenAI client not configured
