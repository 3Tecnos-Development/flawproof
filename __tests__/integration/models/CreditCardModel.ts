import { IsDefined } from "class-validator";
import { Expose } from "class-transformer";

const requiredField = "Required Field";

export class CreditCard {
  @IsDefined({ message: requiredField })
  @Expose()
  name: string;

  @IsDefined({ message: requiredField })
  @Expose()
  cvv: string;
}
