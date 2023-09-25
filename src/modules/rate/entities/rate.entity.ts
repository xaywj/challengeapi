import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class Rate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'float'})
  rate: number; 
}
