import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: 'Los apellidos son obligatorios' })
  apellidos: string;

  @IsString()
  @IsNotEmpty({ message: 'El sexo es obligatorio' })
  sexo: string;

  @IsString()
  @IsNotEmpty({ message: 'El teléfono es obligatorio' })
  telefono: string;

  @IsString()
  @IsNotEmpty({ message: 'La dirección es obligatoria' })
  direccion: string;

  @IsEmail({}, { message: 'El correo no tiene un formato válido' })
  email: string;

  @IsDateString({}, { message: 'La fecha debe ser válida' })
  fecha_nacimiento: string;
}