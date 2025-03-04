import { Controller, Module, Get } from "@nestjs/common";

// This is a decorator.
// It tells Nest.js that we are creating a class thats gonna serve as a Controller.
// Its a class that will handle& route incoming requests.
@Controller()
class AppController {
  // This @Get() decorator tells that a method will respond to a GET request.
  @Get()
  // Handle GET requests to the ROOT of our application.
  getRootRoute() {
    return 'Hello Nest.js!';
  }
}
