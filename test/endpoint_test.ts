import * as request from "supertest";
import * as app from '../bin/www';

describe("GET vision image list", () => {
  it("should return 200 OK", (done) => {
    request(app).get("/api/v1/visions")
      .expect(200, done)
  });
})

describe("POST vision image", () => {
  it("should return 200 OK", (done) => {
    request(app).post("/api/v1/visions/detect")
      .send({uri: "http://img.insight.co.kr/static/2017/05/11/700/767CRT3G7TTIP0A3NA40.jpg"})
      .expect(200, done)
  }).timeout(10 * 1000);
})