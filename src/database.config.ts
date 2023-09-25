import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const configdatabase: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default configdatabase;