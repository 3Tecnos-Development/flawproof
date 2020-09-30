import request from "supertest";
import { IFlawproof } from "../../src/interfaces/IFlawproof";
import app from "./App";
import { HttpStatusCode } from "../../src/enums/HttpStatusCode";

describe("class-validator", () => {
  it("should error of type VALIDATION_ERRORS", async () => {
    const response = await request(app).post("/peoples").send({
      name: "Lindsay",
      email: "lindsay@3",
    });

    const flawproof = JSON.parse(response.text) as IFlawproof;
    expect(
      flawproof.statusCode === HttpStatusCode.BAD_REQUEST &&
        flawproof.errorType === "VALIDATION_ERRORS" &&
        flawproof.validationErrors.length > 0
    ).toBe(true);
  });
});

describe("Business Rules", () => {
  it("should error of type RULES_ERRORS", async () => {
    const response = await request(app).post("/creditcards").send({
      name: "Lindsay",
      cvv: "999",
    });

    const flawproof = JSON.parse(response.text) as IFlawproof;
    expect(
      flawproof.statusCode === HttpStatusCode.BAD_REQUEST &&
        flawproof.errorType === "RULES_ERRORS"
    ).toBe(true);
  });
});
