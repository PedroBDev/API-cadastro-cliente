import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-user.dto';

export class UpdateClienteDto extends PartialType(OmitType(CreateClienteDto, ['email'] as const))
{}