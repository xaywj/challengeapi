import { Order } from 'src/modules/order/entities/order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column({ default: 'null' })
  email: string;

  @Column()
  role: string;

  @Column({default: 'null'})
  url: string;

  @Column({default: 'null'})
  ip: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  username: string;

  @Column()
  password: string;

  // @OneToMany(() => Order, (order) => order?.user, { nullable: true })
  // orders?: Order[];
}
