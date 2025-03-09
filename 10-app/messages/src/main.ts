import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  // This useGlobalPipes will validate every incoming request body.
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
