import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateRegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Length(6, 18)
  phone: string;

  @IsNotEmpty()
  @Length(6, 20)
  password: string;

  @IsString()
  email: string;

  username: string;
  role: string;

  ip: string;
  url: string;
}
