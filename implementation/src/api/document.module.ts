export const CommandHandlers = [];
export const EventHandlers = [];


import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DocumentController } from './document.controller';
import { CreateDocumentHandler } from 'src/application/handlers/createDocument.handler';
import { DocumentRepository } from 'src/infrastracture/data/document-repository/document.repository';
import { DocumentService } from './document.service';
import { ListDocumentsHandler } from 'src/application/handlers/listDocuments.handler';

@Module({
  imports: [CqrsModule],
  controllers: [DocumentController],
  providers: [
    DocumentService,
    DocumentRepository,
    CreateDocumentHandler,
    ListDocumentsHandler,
  ],
})
export class DocumentModule {}