import { Order } from 'src/modules/order/entities/order.entity';
import { Product } from 'src/modules/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JoinAttribute } from 'typeorm/query-builder/JoinAttribute';

@Entity()
export class Orderdetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  price: number;

  @Column({ type: 'integer' })
  product_id: number; 

  
  @Column({ type: 'integer' })
  order_id: number; 

  @Column({ type: 'double' })
  quantity: number;

  @ManyToOne(() => Order, (order) => order.orderdetails)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderdetails)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
