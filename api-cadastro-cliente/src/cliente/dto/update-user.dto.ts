import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-user.dto';

export class UpdateClienteDto extends PartialType(
  CreateClienteDto,
) {}