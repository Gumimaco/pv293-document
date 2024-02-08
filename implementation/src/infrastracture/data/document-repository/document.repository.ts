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
  // async update(document: Document): Promise<Document> {
  //   const index = this.documents.findIndex((d) => d.id === document.id);
  //   this.documents[index] = document;
  //   return document;
  // }
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
