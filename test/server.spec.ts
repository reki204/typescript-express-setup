import request from "supertest";
import { AppServer } from "../src/server";

describe('GET /', () => {
  it('return 200', async () => {
    const server = new AppServer();
    const res = await request(server.app).get('/');
    expect(res.status).toBe(200);
  });
  it('correct message', async () => {
    const server = new AppServer();
    const res = await request(server.app).get('/');
    expect(res.body.message).toBe({ message: 'AppServer started' });
  });
});
