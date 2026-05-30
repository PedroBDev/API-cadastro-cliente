import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [ClienteModule, PrismaModule]
})

export class AppModule {}
