export declare class ValidationError {
  target?: Object;

  property: string;

  value?: any;

  constraints?: {
    [type: string]: string;
  };

  children: ValidationError[];

  contexts?: {
    [type: string]: any;
  };
}
