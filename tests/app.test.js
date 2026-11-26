const request = require('supertest');
const { createApp } = require('../src/app');

describe('KT3 App', () => {
  let app;

  beforeEach(() => {
    app = createApp();
  });

  test('GET / должен возвращать 200 и текст "KT3 App"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe("Wrong result");
  });

  test('GET /health должен возвращать 200 и JSON { status: "ok" }', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});