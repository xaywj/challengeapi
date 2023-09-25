import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Datarespone } from './handle/respone.handle';
import { Filterhandle } from './handle/filter.handle'; 
import { ValidationPipe } from '@nestjs/common'; 
import { Jwtmiddleware } from './middleware/jwtmiddleware';
import { JwtService } from '@nestjs/jwt'; 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new Jwtmiddleware(app.get(JwtService)));
  app.useGlobalInterceptors(new Datarespone());
  app.useGlobalFilters(new Filterhandle());
  console.log(process.env.JWT_KEY);
  
  await app.listen(3000);
}
bootstrap();
