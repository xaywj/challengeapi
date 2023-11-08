import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Orderdetail } from '../orderdetail/entities/orderdetail.entity';
import { PaymentOrderDto } from './dto/payment-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: Orderdetail[], @Req() req: any) {
    return this.orderService.create(createOrderDto, req);
  }

  @Post('payment')
  payment(@Body() makepayment: PaymentOrderDto, @Req() req: any) {
    return this.orderService.makepayment(makepayment, req);
  }
}
