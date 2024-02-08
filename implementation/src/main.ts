import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Document Context API')
    .setDescription('Clean Architecture with CQRS pattern in NestJS')
    .setVersion('1.0')
    .addTag('document-context')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api/swagger', app, document);

  await app.listen(3000);
}
bootstrap();
