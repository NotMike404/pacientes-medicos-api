import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateMedicoDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: 'Los apellidos son obligatorios' })
  apellidos: string;

  @IsString()
  @IsNotEmpty({ message: 'La cédula profesional es obligatoria' })
  cedula_profesional: string;

  @IsInt({ message: 'La especialidad debe ser un número entero' })
  @IsNotEmpty({ message: 'La especialidad es obligatoria' })
  especialidadId: number;
}