import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PacientesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.paciente.findMany();
  }

  findOne(id: number) {
    return this.prisma.paciente.findUnique({
      where: { id },
    });
  }

        async create(data: any) {
      try {
        return await this.prisma.paciente.create({
          data,
        });
      } catch {
        throw new BadRequestException(
          'El correo electrónico ya está registrado',
        );
      }
    }

  update(id: number, data: any) {
    return this.prisma.paciente.update({
      where: { id },
      data,
    });
  }
  
  remove(id: number) {
    return this.prisma.paciente.delete({
      where: { id },
    });
  }
}