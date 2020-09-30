import express from "express";
import cors from "cors";
import { validate } from "class-validator";
import { plainToClassFromExist } from "class-transformer";
import { CreditCard } from "./models/CreditCardModel";
import { HttpStatusCode } from "../../src/enums/HttpStatusCode";
import { People } from "./models/PeopleModel";
import { Flawproof } from "../../src/Flawproof";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/peoples", (request, response) => {
  const people = plainToClassFromExist(new People(), request.body);

  validate(people).then((errors) => {
    const flawproof = new Flawproof(
      "VALIDATION_ERRORS",
      HttpStatusCode.BAD_REQUEST,
      "Validação Requerida",
      false,
      errors
    );
    response.status(HttpStatusCode.BAD_REQUEST).send(flawproof);
  });
});

app.post("/creditcards", (request, response) => {
  const creditCard = plainToClassFromExist(new CreditCard(), request.body);

  if (creditCard.cvv === "999") {
    const flawproof = new Flawproof(
      "RULES_ERRORS",
      HttpStatusCode.BAD_REQUEST,
      "Código CVV inválido",
      false
    );
    response.status(HttpStatusCode.BAD_REQUEST).send(flawproof);
  }
});

export default app;
