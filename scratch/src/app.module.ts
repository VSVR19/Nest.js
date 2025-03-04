import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

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
export class AppModule {}
