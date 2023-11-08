import { Module } from '@nestjs/common';
import { OrderdetailService } from './orderdetail.service';
import { OrderdetailController } from './orderdetail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orderdetail } from './entities/orderdetail.entity';

@Module({
  controllers: [OrderdetailController],
  imports: [TypeOrmModule.forFeature([Orderdetail])],
  providers: [OrderdetailService],
})
export class OrderdetailModule {}
