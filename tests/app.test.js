const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/test', (req, res) => {
  res.json({ success: true });
});

test('GET /test', async () => {
  const res = await request(app).get('/test');
  expect(res.statusCode).toBe(200);
  expect(res.body.success).toBe(true);
});