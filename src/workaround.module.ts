import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UsersController } from "./users/users.controller";
import { LoggerMiddleware } from "./middlewares/logger.middleware";

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [],
})
export class WorkaroundModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('users');
  }
}
