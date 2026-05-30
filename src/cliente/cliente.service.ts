import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { UpdateClienteDto } from './dto/update-user.dto';
import { CreateClienteDto } from './dto/create-user.dto';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClienteService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async findOne(id: number) {
    const cliente =
      await this.prisma.cliente.findUnique({
        where: { id },
      });

    if (!cliente) {
      throw new NotFoundException(
        'Cliente não encontrado',
      );
    }

    return cliente;
  }

  async findAll() {
    return this.prisma.cliente.findMany({
      orderBy: {'id': 'asc'},
    });
  }

  async create(
    data: CreateClienteDto,
  ) {
    const existingCliente =
      await this.prisma.cliente.findFirst({
        where: {
          email: data.email,
        },
      });

    if (existingCliente) {
      throw new BadRequestException(
        'Cliente com este email já existe',
      );
    }

    return this.prisma.cliente.create({
  data: {
    nome: data.nome,
    email: data.email,
    telefone: data.telefone,
    idade: data.idade,

    endereco: {
      create: {
        rua: data.endereco.rua,
        numero: data.endereco.numero,
        bairro: data.endereco.bairro,
        cidade: data.endereco.cidade,
        estado: data.endereco.estado,
        cep: data.endereco.cep,
      },
    },
  },

  include: {
    endereco: true,
  },
});
  }

  async update(
    id: number,
    data: UpdateClienteDto,
  ) {
    await this.findOne(id);
    try {
      return this.prisma.cliente.update({
        where: { id },

        data: {
          nome: data.nome,
          telefone: data.telefone,
          idade: data.idade,

          endereco: data.endereco
            ? {
                update: data.endereco,
              }
            : undefined,
        },

        include: {
          endereco: true,
        },
      });
    } catch (error) {
      throw new BadRequestException(
        'Erro ao atualizar cliente',
      );
    }
  }

  async delete(id: number) {
    const cliente = await this.findOne(id);

    if (!id) {
      throw new BadRequestException('ID do cliente não fornecido');
    }

    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }

    return this.prisma.cliente.delete({
      where: { id },
    });
  }

  async findByName(nome: string) {
    const cliente =
      await this.prisma.cliente.findFirst({
        where: { nome },
      });
    
    if (!cliente) {
      throw new NotFoundException(
        'Cliente não encontrado',
      );
    }

    return cliente;
  }

  async findByEmail(email: string) {
    const cliente = await this.prisma.cliente.findFirst({
      where: { email },
    });

    if (!cliente) {
      throw new NotFoundException(
        "Cliente não encontrado"
      );
    }

    return cliente;
  }
}