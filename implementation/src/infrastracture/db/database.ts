import { Kysely } from 'kysely';
import { DB } from './schema';

export class Database extends Kysely<DB> {}
