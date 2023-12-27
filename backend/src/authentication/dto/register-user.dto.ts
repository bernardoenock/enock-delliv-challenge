import { IsString } from "class-validator";

export class RegisterUsersDto {

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}