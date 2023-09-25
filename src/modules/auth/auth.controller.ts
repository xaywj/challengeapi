import {
  Body,
  Controller,
  NotAcceptableException,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}
  @Post('login')
  async login(@Body() authDto: AuthDto) {
    let user: any = await this.authService.validateUser(authDto);
    // check password hash here
    const isMatch = await bcrypt.compare(authDto.password, user.password);
    if (!isMatch) throw new UnauthorizedException();
    const payload = {
      id: user?.id,
      username: user?.username,
      role: user?.role,
    };
    const token = await this.jwtService.signAsync(payload);
    return {
      token: this.jwtService.sign(payload),
      user: user, 
    };
  }
}
