import { Body, Controller, Post } from '@nestjs/common';
import { Role } from '@prisma/client';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Se puede registrar una cuenta sin iniciar sesión.
  @Public()
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

  // Se puede entrar sin token porque aquí se obtiene el token.
  @Public()
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
