import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Datarespone } from './handle/respone.handle';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalInterceptors(new Datarespone());
  await app.listen(3000);
}
bootstrap();
