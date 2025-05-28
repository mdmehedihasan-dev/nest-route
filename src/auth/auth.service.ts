import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getLogin(): string {
    return 'Login Page';
  }
  getRegister(): string {
    return 'Register Page';
  }
}
