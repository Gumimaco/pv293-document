import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import { DB } from './schema';
import { DatabaseConfig } from './databaseConfig';

export const databaseFactory = (config: DatabaseConfig) => {
  const dialect = new PostgresDialect({
    pool: new Pool({
      database: config.database,
      host: config.host,
      password: config.password,
      user: config.user,
      port: config.port,
      max: 100,
    }),
  });

  const db = new Kysely<DB>({
    dialect,
  });
  return db;
};
