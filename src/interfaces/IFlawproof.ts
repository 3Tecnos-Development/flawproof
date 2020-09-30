import { ValidationError } from "class-validator";
import { ErrorType } from "../types/ErrorType";
import { HttpStatusCode } from "../enums/HttpStatusCode";

export interface IFlawproof {
  statusCode: HttpStatusCode;
  description: string;
  errorType: ErrorType;
  isOperational: boolean;
  validationErrors: ValidationError[];
}
