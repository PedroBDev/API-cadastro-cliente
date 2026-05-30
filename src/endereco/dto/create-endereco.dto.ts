import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateEnderecoDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  rua!: string;

  @ApiProperty()
  @IsString()
  numero!: string;

  @ApiProperty()
  @IsString()
  bairro!: string;

  @ApiProperty()
  @IsString()
  cidade!: string;

  @ApiProperty()
  @IsString()
  estado!: string;

  @ApiProperty()
  @IsString()
  cep!: string;
}