import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';

@Module({
  controllers: [OrderController],
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [OrderService],
})
export class OrderModule {}
