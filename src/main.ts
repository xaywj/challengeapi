import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Datarespone } from './handle/respone.handle';
import { Filterhandle } from './handle/filter.handle'; 
import { ValidationPipe } from '@nestjs/common';
import { Jwtmiddleware } from './middleware/jwtmiddleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new Jwtmiddleware());
  app.useGlobalInterceptors(new Datarespone());
  app.useGlobalFilters(new Filterhandle());
  await app.listen(3000);
}
bootstrap();
