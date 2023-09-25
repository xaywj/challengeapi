import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Datarespone } from './handle/respone.handle';
import { Filterhandle } from './handle/filter.handle';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalInterceptors(new Datarespone());
  app.useGlobalFilters(new Filterhandle());
  await app.listen(3000);
}
bootstrap();
