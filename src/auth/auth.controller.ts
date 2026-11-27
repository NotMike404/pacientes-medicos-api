import { Body, Controller, Post } from '@nestjs/common';
import { Role } from '@prisma/client';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body()
    body: {
      email: string;
      password: string;
      role: Role;
    },
  ) {
    return this.authService.register(
      body.email,
      body.password,
      body.role,
    );
  }

  @Post('login')
  login(
    @Body()
    body: {
      email: string;
      password: string;
    },
  ) {
    return this.authService.login(body.email, body.password);
  }
}
// Controller de autenticación: recibe los datos y llama al AuthService
