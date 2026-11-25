import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicoDto } from './create-medico.dto';

export class UpdateMedicoDto extends PartialType(CreateMedicoDto) {}

// PartialType toma las validaciones de CreateMedicoDto
// y hace que todos sus campos sean opcionales.
// Así podemos actualizar solo el dato que necesitamos cambiar.