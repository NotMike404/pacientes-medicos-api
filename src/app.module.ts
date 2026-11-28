import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { MedicosModule } from './medicos/medicos.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core'; // le dice a Nest que un guard será global.
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard'; // Es el guard que revisa el token JWT.

@Module({
  imports: [PrismaModule, PacientesModule, MedicosModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD, // aplica JwtAuthGuard automáticamente a todas las rutas de la aplicación
      useClass: JwtAuthGuard, // indica cuál guard se usará en todas las rutas
    },
  ],
})
export class AppModule {}
