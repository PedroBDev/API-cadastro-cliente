import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

import { CreateEnderecoDto } from '../../endereco/dto/create-endereco.dto';

export class CreateClienteDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome!: string;

  @ApiProperty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsString()
  telefone!: string;

  @ApiProperty({
    type: CreateEnderecoDto,
  })
  @ValidateNested()
  @Type(() => CreateEnderecoDto)
  endereco!: CreateEnderecoDto;

  @ApiProperty()
  @IsInt()
  @Min(0)
  idade!: number;
}