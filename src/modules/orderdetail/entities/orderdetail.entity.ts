import { Order } from 'src/modules/order/entities/order.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orderdetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  price: number;

  @Column({ type: 'double' })
  quantity: number;

  @Column({ type: 'double' })
  totalprice: number;

  @ManyToOne(() => Order, (order) => order.orderdetails)
  order: Order;
}
