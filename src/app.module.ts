import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { UserModule } from './modules/user/user.module';
import configdatabase from './database.config';

@Module({  
  imports: [TypeOrmModule.forRoot(configdatabase), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
