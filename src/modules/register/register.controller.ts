import {
  Body,
  Controller, 
  Post,
  Req,
} from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UserService } from '../user/user.service';

@Controller('register')
export class RegisterController {
    constructor(private readonly userService: UserService) {}
  @Post()
  create(@Req() req: any, @Body() createregister: CreateRegisterDto) { 
    return this.userService.register(createregister);
  }
}
