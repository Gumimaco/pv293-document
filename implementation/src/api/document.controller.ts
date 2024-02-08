import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDocumentRequest } from 'src/application/document.model';
import { DocumentService } from 'src/api/document.service';

@Controller('/api/documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Get()
  async getDocuments() {
    return await this.documentService.getDocuments();
  }

  @Post()
  async createDocument(@Body() newDocument: CreateDocumentRequest) {
    return this.documentService.createDocument(newDocument);
  }
}
