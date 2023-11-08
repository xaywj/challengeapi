import { Order } from 'src/modules/order/entities/order.entity';
import { Injectable, Req } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orderdetail } from '../orderdetail/entities/orderdetail.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly OrderRepository: Repository<Order>,

    @InjectRepository(Orderdetail) // Inject the Orderdetail repository
    private readonly OrderdetailRepository: Repository<Orderdetail>,
  ) {}

  async create(createOrderDto: Orderdetail[], @Req() req: any) {
    const orderdetail: Orderdetail[] = createOrderDto || [];
    const order:Order = await this.OrderRepository.save({
      customer_id: req.user.id, // This is Id for user login
      status: 'pending',
    });
    const orderid= order.id;
    
    orderdetail.length > 0 &&
      order?.id > 0 &&
      orderdetail.forEach(async (element) => {
        console.log(orderid);
        
        await this.OrderdetailRepository.save({
          order_id: Number(orderid), // this is id for order
          product_id: element.product_id,
          quantity: element.quantity,
          price: element.price,
        });
      });

    return { message: 'Order Created' };
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
