import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/login')
  getLogin(): string {
    return this.authService.getLogin();
  }
  @Get('/register')
  getRegister(): string {
    return this.authService.getRegister();
  }
}
