import { Kysely } from 'kysely';

export async function up(db: Kysely<any>) {
  await db.schema
  .createTable('documents')
  .addColumn('id', 'serial', (c) => c.primaryKey())
  .addColumn('name', 'text', (c) => c.notNull())
  .addColumn('companyId', 'serial', (c) => c.notNull())
  .addColumn('assignedUserId', 'serial')
  .addColumn('content', 'text', (c) => c.notNull())
  .addColumn('createdAt', 'timestamp', (c) => c.notNull())
  .addColumn('updatedAt', 'timestamp')
  .addColumn('deletedAt', 'timestamp')
  .execute();
}
export async function down(db: Kysely<any>) {
  await db.schema.dropTable('documents').execute();
}