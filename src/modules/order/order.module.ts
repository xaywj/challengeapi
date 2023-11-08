import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Orderdetail } from '../orderdetail/entities/orderdetail.entity';

@Module({
  controllers: [OrderController],
  imports: [TypeOrmModule.forFeature([Order, Orderdetail])],
  providers: [OrderService],
})
export class OrderModule {}
