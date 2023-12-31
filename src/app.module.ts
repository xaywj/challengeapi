import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { RateModule } from './modules/rate/rate.module';
import { ProductModule } from './modules/product/product.module';
import { AuthModule } from './modules/auth/auth.module';
import configdatabase from './database.config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { secret } from './config/token';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { RegisterModule } from './modules/register/register.module';
import { OrderModule } from './modules/order/order.module';
import { OrderdetailModule } from './modules/orderdetail/orderdetail.module';

@Module({
  imports: [
    PassportModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(configdatabase),
    UserModule,
    RateModule,
    ProductModule,
    AuthModule,
    JwtModule.register({
      secret: secret,
      signOptions: { expiresIn: '1h' },
    }),
    RegisterModule,
    OrderModule,
    OrderdetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
