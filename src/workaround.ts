import { NestFactory } from "@nestjs/core";
import serverlessExpress from "@vendia/serverless-express";
import { Callback, Context, Handler } from "aws-lambda";
import { WorkaroundModule } from "./workaround.module";

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(WorkaroundModule);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
