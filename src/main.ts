import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';  // Activa la validación de todos los DTOs.

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Descarta cualquier campo del body que no esté declarado en el DTO, en vez de dejarlo pasar silenciosamente.
      transform: true, // Convierte automáticamente el body plano a una instancia de la clase DTO antes de que llegue al Controller.
      forbidNonWhitelisted: true, // En vez de dejar pasar whitelist silenciosamente, rechaza la petición con 400 Bad Request.
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();