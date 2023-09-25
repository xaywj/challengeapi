import { Rate } from 'src/modules/rate/entities/rate.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text', nullable: true })
  detail: string;

  @Column({ type: 'float' })
  price: number;

  @OneToOne(() => Rate, (rate) => rate.product)
  @JoinColumn({ name: 'rate_id' })
  rate: Rate;
}
