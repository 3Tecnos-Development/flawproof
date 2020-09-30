import { IsDefined, IsInt, IsEmail } from "class-validator";
import { Expose } from "class-transformer";

const requiredField = "Required Field";

export class People {
  @IsDefined({ message: requiredField })
  @Expose()
  name: string;

  @IsDefined({ message: requiredField })
  @IsInt()
  @Expose()
  age: number;

  @IsDefined({ message: requiredField })
  @Expose()
  @IsEmail()
  email: string;
}
