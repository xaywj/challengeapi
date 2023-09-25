import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async validateUser(authDto: any) {
    const user: any = await this.usersRepository.findOneBy({
      username: authDto.username,
    });
    if (!user) throw new NotAcceptableException('Invalid credentials');
    return user;
  }
}
