import { ValidationError } from "class-validator";
import { IFlawproof } from "./interfaces/IFlawproof";
import { BaseError } from "./BaseError";
import { HttpStatusCode } from "./enums/HttpStatusCode";
import { ErrorType } from "./types/ErrorType";

export class Flawproof extends BaseError implements IFlawproof {
  public readonly validationErrors: ValidationError[];

  public readonly errorType: ErrorType;

  public readonly description: string;

  public readonly statusCode: HttpStatusCode;

  public readonly isOperational: boolean;

  constructor(
    errorType: ErrorType,
    httpCode: HttpStatusCode,
    description: string,
    isOperational: boolean,
    validationErrors?: ValidationError[]
  ) {
    super(description);
    this.statusCode = httpCode;
    this.errorType = errorType;
    this.description = description;
    this.isOperational = isOperational;

    if (validationErrors) {
      this.validationErrors = validationErrors;
    }
  }
}
