import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UsersController } from "./users/users.controller";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { PreprocessMiddleware } from "./middlewares/preprocess.middleware";

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [],
})
export class WorkaroundModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'users*', method: RequestMethod.GET });
    consumer
      .apply(LoggerMiddleware, PreprocessMiddleware)
      .forRoutes({ path: 'users*', method: RequestMethod.POST });
  }
}
