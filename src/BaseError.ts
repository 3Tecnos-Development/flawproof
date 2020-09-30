export class BaseError extends Error {
  constructor(description: string) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}
