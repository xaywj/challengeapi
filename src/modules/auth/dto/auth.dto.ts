import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty() 
  password: string; 
}
