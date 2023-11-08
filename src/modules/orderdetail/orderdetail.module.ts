import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orderdetail } from './entities/orderdetail.entity';

@Module({
  controllers: [],
  imports: [TypeOrmModule.forFeature([Orderdetail])],
  providers: [],
})
export class OrderdetailModule {}
