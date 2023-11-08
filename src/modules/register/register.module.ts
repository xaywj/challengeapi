import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { UserService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';

@Module({
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [RegisterController]
})
export class RegisterModule {}
