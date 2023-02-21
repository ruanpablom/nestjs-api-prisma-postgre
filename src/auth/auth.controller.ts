import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { User as UserDecorator } from 'src/decorators/user.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { AuthService } from './auth.service';
import {
  AuthForgetDTO,
  AuthLoginDTO,
  AuthRegisterDTO,
  AuthResetDTO,
} from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: AuthRegisterDTO) {
    return this.authService.register(body);
  }

  @Post('login')
  async login(@Body() { email, password }: AuthLoginDTO) {
    return this.authService.login(email, password);
  }

  @Post('forget')
  async forget(@Body() { email }: AuthForgetDTO) {
    return this.authService.forget(email);
  }

  @Post('reset')
  async reset(@Body() { password, token }: AuthResetDTO) {
    return this.authService.reset(password, token);
  }

  @UseGuards(AuthGuard)
  @Post('me')
  async me(@UserDecorator('email') user) {
    return { user };
  }
}
