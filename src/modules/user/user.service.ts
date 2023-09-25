import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOneBy({
      username: createUserDto.username,
    });
    if (user)
      throw new NotFoundException(
        `User ${createUserDto.username} already exists`,
      );
    return await this.userRepository.save({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    });
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) throw new NotFoundException(`User #${id} not found`);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // check if the user id exists in the table
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) throw new NotFoundException(`User #${id} not found`);

    // check if the username deference this id already exists in the table
    const username = await this.userRepository.findOneBy({
      username: updateUserDto.username,
    });

    if (username && username.id != id)
      throw new NotFoundException(
        `User ${updateUserDto.username} already exists`,
      );
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    // check if the user id exists in the table
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) throw new NotFoundException(`User #${id} not found`);
    await this.userRepository.delete(id);
    return true;
  }
}
