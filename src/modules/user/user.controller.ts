import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  NotAcceptableException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Req() req: any, @Body() createUserDto: CreateUserDto) { 
    if (!['admin', 'user'].includes(createUserDto.role))
      throw new NotAcceptableException('role must be admin or user');
    // admin only
    if (req.user.role != 'admin')
      throw new NotAcceptableException('You are not allowed to do this action');
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    if (!['admin', 'user'].includes(updateUserDto.role))
      throw new NotAcceptableException('role must be admin or user');
    // admin only
    if (req.user.role != 'admin')
      throw new NotAcceptableException('You are not allowed to do this action');
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Req() req: any, @Param('id') id: string) {
    if (req.user.role != 'admin')
      throw new NotAcceptableException('You are not allowed to do this action');
    return this.userService.remove(+id);
  }
}
