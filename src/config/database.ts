export const configdb = { 
  db_name: process.env.DATABASE_NAME || 'challenge_db',
  db_user: process.env.DATABASE_USER || 'root',
  db_password: process.env.DATABASE_PASS || '',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT) || 3306,
};
