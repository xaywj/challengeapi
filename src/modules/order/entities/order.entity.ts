import { Orderdetail } from 'src/modules/orderdetail/entities/orderdetail.entity';
import { User } from 'src/modules/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'pending' })
  status: string;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Orderdetail, (orderdetail) => orderdetail.order)
  orderdetails: Orderdetail[];

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'customer_id' }) // Custom foreign key name
  customer: User;
}
