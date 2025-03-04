import { NestFactory } from '@nestjs/core';
import { Controller, Module, Get } from "@nestjs/common";

/**
 * This is a decorator.
 * It tells Nest.js that we are creating a class thats gonna serve as a Controller.
 * Its a class that will handle& route incoming requests.
 */
@Controller()
class AppController {
  // This @Get() decorator tells that a method will respond to a GET request.
  @Get()
  // Handle GET requests to the ROOT of our application.
  getRootRoute() {
    return 'Hello Nest.js!';
  }
}

/**
 * A module wraps up a controller.
 * Every Nest.js application has at least one module.
 * A module expects a configuration object to be passed to it.
 */

/**
 * When the app starts up, Nest.js looks at the controllers array and AUTOMATICALLY CREATES OBJECTS for all the controllers listed there.
 * It then looks at the route decorators in the controllers and AUTOMATICALLY SETS UP ROUTES.
 */
@Module({
  controllers: [AppController]
})
class AppModule {}

// This is the very first function that will be called when our app starts up.
async function bootstrap() {
  // Create a Nest.js application.
  const app = await NestFactory.create(AppModule);
  // Start listening on port 3000.
  await app.listen(3000);
  
}

bootstrap();