import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  rate_id: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;
  
  @IsString()
  detail:string
  
  @IsString()
  @IsNotEmpty()
  role:string
}
