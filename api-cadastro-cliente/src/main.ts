import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

import {
  SwaggerModule,
  DocumentBuilder,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // valida DTO automaticamente
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // swagger
  const config = new DocumentBuilder()
    .setTitle('API Cadastro de Clientes')
    .setDescription('Documentação da API de clientes')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(
    app as any,
    config,
  );

  SwaggerModule.setup('docs', app as any, document);

  await app.listen(3000);
}

bootstrap();