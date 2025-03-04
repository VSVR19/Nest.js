import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// This is the very first function that will be called when our app starts up.
async function bootstrap() {
  // Create a Nest.js application.
  const app = await NestFactory.create(AppModule);
  // Start listening on port 3000.
  await app.listen(3000);
  
}

bootstrap();
