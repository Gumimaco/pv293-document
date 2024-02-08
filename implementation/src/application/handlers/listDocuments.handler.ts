import { DocumentRepository } from 'src/infrastracture/data/document-repository/document.repository';
import { ListDocumentsQuery } from '../queries/listDocuments.query';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(ListDocumentsQuery)
export class ListDocumentsHandler
  implements IQueryHandler<ListDocumentsHandler>
{
  constructor(private readonly documentRepository: DocumentRepository) {}

  async execute() {
    return await this.documentRepository.findAll();
  }
}
