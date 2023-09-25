import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRateDto {
  @IsString()
  @IsNotEmpty()
  name: string; 
 
  @IsNotEmpty()
  @IsNumber()
  rate: number; 
}
