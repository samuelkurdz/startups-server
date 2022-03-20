import { Client } from 'pg';

export const postgresClient = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: '1234567890',
  database: 'test'
});
