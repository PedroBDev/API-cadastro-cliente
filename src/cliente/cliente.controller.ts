import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';

import { UpdateClienteDto } from './dto/update-user.dto';
import { CreateClienteDto } from './dto/create-user.dto';
import { ClienteService } from './cliente.service';

@Controller('cliente')
@ApiTags('Cliente')
export class ClienteController {
  constructor(
    private readonly clienteService: ClienteService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Criar cliente',
  })
  @ApiResponse({
    status: 201,
    description: 'Cliente criado com sucesso',
  })
  create(
    @Body() data: CreateClienteDto,
  ) {
    return this.clienteService.create(data);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os clientes',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de clientes',
  })
  findAll() {
    return this.clienteService.findAll();
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar cliente',
  })
  @ApiParam({
    name: 'id',
    example: 1,
    description: 'ID do cliente',
  })
  update(
    @Param('id', ParseIntPipe)
    id: number,

    @Body()
    data: UpdateClienteDto,
  ) {
    return this.clienteService.update(
      id,
      data,
    );
  }

  @Get('nome/:nome')
  @ApiOperation({
    summary: 'Buscar cliente por nome',
  })
  @ApiParam({
    name: 'nome',
    example: 'Pedro Barbosa',
  })
  findByName(
    @Param('nome')
    nome: string,
  ) {
    return this.clienteService.findByName(
      nome,
    );
  }

  @Get('email/:email')
  @ApiOperation({
    summary: 'Buscar cliente por email',
  })
  @ApiParam({
    name: 'email',
  })
  findByEmail(
    @Param('email')
    email: string,
  ) {
    return this.clienteService.findByEmail(email);
  }


  @Delete(':id')
  @ApiOperation({
    summary: 'Excluir cliente',
  })
  delete(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.clienteService.delete(id);
  }

  
}