import { Injectable } from '@nestjs/common';
import { Document } from 'src/core/entities/document.entity';
import { Database } from 'src/infrastracture/db/database';

@Injectable()
export class DocumentRepository {
  constructor(private readonly db: Database) {
  }
  async create(document: Document): Promise<Document> {
    await this.db.insertInto('documents')
    .values({
      id: document.id,
      name: document.name,
      companyId: document.companyId,
      assignedUserId: document.assignedUserId,
      content: document.content,
      createdAt: document.createdAt,
      updatedAt: document.updatedAt,
      deletedAt: document.deletedAt,
    }).execute(); 
    return document;
  }
  async updateContent(id: number, content: string | null, name: string | null): Promise<void> {
    // Here validate shit so we dont override it to null for no reason
    if (content === null && name === null) return;
    await this.db.updateTable('documents')
    .$if(content !== undefined, (qb) => qb.set('content',content))
    .$if(name !== undefined, (qb) => qb.set('name', name))
    .where('id', '=', id)
    .execute();
  }
  async assignUserToDocument(userId: number, documentId: number): Promise<void> {
    await this.db.updateTable('documents')
    .set('assignedUserId', userId)
    .where('id', '=', documentId)
    .execute();
  }
  async delete(id: number): Promise<void> {
    await this.db.deleteFrom('documents').where('id', '=', id).execute();
  }
  async findById(id: number): Promise<Document> {
    const document = await this.db.selectFrom('documents').selectAll().where('id','=',id).executeTakeFirst();
    return document;
  }
  async findAll(): Promise<Document[]> {
    const documents = await this.db.selectFrom('documents').selectAll().execute();
    return documents;
  }
}
