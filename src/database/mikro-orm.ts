import { MikroORM } from '@mikro-orm/core';
import config from './mikro-orm.config';
import {SqliteDriver} from "@mikro-orm/sqlite";

const init = async () => {
  const orm = await MikroORM.init<SqliteDriver>(config);
  if (process.env.NODE_ENV !== 'test') {
    const migrator = orm.getMigrator();
    await migrator.up();
  }
  return orm;
};

export default init;
