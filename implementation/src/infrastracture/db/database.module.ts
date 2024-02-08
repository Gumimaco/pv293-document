import { Global, Module } from '@nestjs/common';
import { Database } from './database';
import { databaseFactory } from './databaseFactory';
import {
  ConfigurableDatabaseModule,
  DATABASE_OPTIONS,
} from './database.module-definition';
import { DatabaseConfig } from './databaseConfig';

@Global()
@Module({
  exports: [Database],
  providers: [
    {
      provide: Database,
      inject: [DATABASE_OPTIONS],
      useFactory: (config: DatabaseConfig) => databaseFactory(config),
    },
  ],
})
export class DatabaseModule extends ConfigurableDatabaseModule {}
