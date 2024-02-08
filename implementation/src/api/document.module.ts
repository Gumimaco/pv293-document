import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DocumentController } from './document.controller';
import { CreateDocumentHandler } from 'src/application/handlers/createDocument.handler';
import { DocumentRepository } from 'src/infrastracture/data/document-repository/document.repository';
import { DocumentService } from './document.service(UNUSED)';
import { ListDocumentsHandler } from 'src/application/handlers/listDocuments.handler';
import { ListDocumentHandler } from 'src/application/handlers/listDocument.handler';
import { AssignUserToDocumentHandler } from 'src/application/handlers/assignUserToDocument.handler';
import { DeleteDocumentHandler } from 'src/application/handlers/deleteDocument.handler';
import { ModifyDocumentHandler } from 'src/application/handlers/modifyDocument.handler';

@Module({
  imports: [CqrsModule],
  controllers: [DocumentController],
  providers: [
    DocumentService,
    DocumentRepository,
    CreateDocumentHandler,
    ListDocumentsHandler,
    ListDocumentHandler,
    AssignUserToDocumentHandler,
    DeleteDocumentHandler,
    ModifyDocumentHandler
  ],
})
export class DocumentModule {}