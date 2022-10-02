import { Options, ReflectMetadataProvider } from '@mikro-orm/core';
import { SqliteDriver } from '@mikro-orm/sqlite';
import path from 'path';
import '../core/initializers/env';

const options: Options<SqliteDriver> = {
  metadataProvider: ReflectMetadataProvider,
  entities: ['./dist/src/database/entities'], // path to our JS entities (dist), relative to `baseDir`
  type: 'sqlite',
  dbName: process.env.NODE_ENV === 'test' ? 'test.db' : 'prod.db',
  migrations: {
    tableName: 'mikro_orm_migrations',
    allOrNothing: true,
    path: path.join(process.cwd(), 'dist/src/database/migrations'),
    pathTs: path.join(process.cwd(), 'src/database/migrations'),
  },
  seeder: {
    path: path.join(process.cwd(), 'dist/src/database/seeders'),
    //pathTs: path.join(process.cwd(), 'src/database/seeders'),
    glob: '!(*.d).{js,ts}', // how to match seeder files (all .js and .ts files, but not .d.ts)
    emit: 'ts', // seeder generation mode
    fileName: (className: string) => className, // seeder file naming convention
  },
};

export default options;
