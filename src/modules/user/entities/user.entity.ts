import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  role: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  username: string;

  @Column()
  password: string;
}
