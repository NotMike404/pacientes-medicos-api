import { PartialType } from '@nestjs/mapped-types';
import { CreatePacienteDto } from './create-paciente.dto';

export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {}

// PartialType reutiliza la estructura y las validaciones de CreatePacienteDto,
// pero convierte sus propiedades en opcionales. 
// Así podemos actualizar solo el dato que necesitamos cambiar.