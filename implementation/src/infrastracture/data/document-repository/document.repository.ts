import { Document } from 'src/core/entities/document.entity';

export class DocumentRepository {
  documents: Document[];
  constructor() {
    this.documents = [];
  }
  async create(document: Document): Promise<Document> {
    this.documents.push(document);
    return document;
  }
  async update(document: Document): Promise<Document> {
    const index = this.documents.findIndex((d) => d.id === document.id);
    this.documents[index] = document;
    return document;
  }
  async delete(id: string): Promise<void> {
    this.documents = this.documents.filter((d) => d.id !== id);
  }
  async findById(id: string): Promise<Document> {
    return this.documents.find((d) => d.id === id);
  }
  async findAll(): Promise<Document[]> {
    return this.documents;
  }
}
