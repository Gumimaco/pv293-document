import { DocumentRepository } from 'src/infrastracture/data/document-repository/document.repository';
import { ListDocumentsQuery } from '../queries/listDocuments.query';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ListDocumentByIdQuery } from '../queries/listDocumentById.query';

@QueryHandler(ListDocumentByIdQuery)
export class ListDocumentHandler
  implements IQueryHandler<ListDocumentByIdQuery>
{
  constructor(private readonly documentRepository: DocumentRepository) {}

  async execute(command: ListDocumentByIdQuery) {
    return await this.documentRepository.findById(command.documentId);
  }
}
