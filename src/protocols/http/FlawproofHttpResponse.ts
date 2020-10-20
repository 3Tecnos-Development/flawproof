import { ValidationError } from "class-validator";
import { HttpStatusCode } from "../../enums/HttpStatusCode";
import { IFlawproof } from "../../interfaces/IFlawproof";
import { ErrorType } from "../../types/ErrorType";
import { IHttpResponse } from "./IHttpResponse";

export class FlawproofHttpResponse {
  static success(message: object): IHttpResponse {
    return {
      statusCode: 200,
      body: JSON.stringify(message),
    };
  }

  static error(
    errorType: ErrorType,
    description: string,
    validationErrors?: ValidationError[]
  ): IHttpResponse {
    const flawproof = {
      statusCode: HttpStatusCode.BAD_REQUEST,
      description,
      errorType,
      validationErrors,
    } as IFlawproof;
    return {
      statusCode: flawproof.statusCode,
      body: JSON.stringify(flawproof),
    };
  }

  static operationalError(error: any, defaultMessage: string): IHttpResponse {
    const message = error.message ? error.message : defaultMessage;

    const flawproof = {
      statusCode: HttpStatusCode.INTERNAL_SERVER,
      description: message,
      errorType: "OPERATIONAL_ERRORS",
      isOperational: true,
    } as IFlawproof;
    return {
      statusCode: flawproof.statusCode,
      body: JSON.stringify(flawproof),
    };
  }
}
