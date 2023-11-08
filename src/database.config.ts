import { TypeOrmModuleOptions } from '@nestjs/typeorm'; 
import { configdb } from './config/database';

const configdatabase: TypeOrmModuleOptions = {
  type: 'mysql',
  host: configdb.host,
  port: configdb.port,
  username: configdb.db_user,
  password: configdb.db_password,
  database: configdb.db_name,
  entities: [
    __dirname + '/**/*.entity{.ts,.js}',
    __dirname + '/**/**/*.entity{.ts,.js}'
  ],
  synchronize: true,
};

export default configdatabase;