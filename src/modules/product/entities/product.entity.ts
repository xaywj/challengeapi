import { Rate } from 'src/modules/rate/entities/rate.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255,  unique: true })
  title: string;

  @Column({ type: 'text', nullable: true })
  detail: string;

  @Column({ type: 'float' })
  price: number;

  @ManyToOne(() => Rate, (rate) => rate.product, { cascade: true })
  @JoinColumn({ name: 'rate_id' })
  rate: Rate;
}
