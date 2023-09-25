import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { RateModule } from './modules/rate/rate.module';
import { ProductModule } from './modules/product/product.module';
import { AuthModule } from './modules/auth/auth.module';
import configdatabase from './database.config';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { Jwtmiddleware } from './middleware/jwtmiddleware';
import { JwtModule } from '@nestjs/jwt';
import { secret } from './config/token';

@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forRoot(configdatabase),
    UserModule,
    RateModule,
    ProductModule,
    AuthModule,
    JwtModule.register({
      secret: secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
