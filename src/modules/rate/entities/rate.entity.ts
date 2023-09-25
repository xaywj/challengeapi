import { Product } from 'src/modules/product/entities/product.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rate')
export class Rate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, type: 'varchar', length: 255})
  name: string;

  @Column({ type: 'float' })
  rate: number;

  @OneToOne(() => Product, (product) => product.rate)
  product: Product;
}
