import request from "supertest";
import app from "../src/index.js";

describe("API", () => {
  it("GET /health should return ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  it("POST /echo should echo input", async () => {
    const res = await request(app).post("/echo").send({ input: "hello" });
    expect(res.statusCode).toBe(200);
    expect(res.body.echoed).toBe("hello");
  });
});
