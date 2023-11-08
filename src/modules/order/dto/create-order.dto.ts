import { Orderdetail } from 'src/modules/orderdetail/entities/orderdetail.entity';

export class CreateOrderDto {
  customer_id: number;
  status: string;
  created_date: Date;
  updated_at: Date;
  orderdetails: Orderdetail[];
}
