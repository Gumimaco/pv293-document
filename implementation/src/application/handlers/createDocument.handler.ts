import { DocumentRepository } from 'src/infrastracture/data/document-repository/document.repository';
import { CreateDocumentCommand } from '../commands/createDocument.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateDocumentCommand)
export class CreateDocumentHandler
  implements ICommandHandler<CreateDocumentCommand>
{
  constructor(private readonly documentRepository: DocumentRepository) {}

  async execute(command: CreateDocumentCommand) {
    // touch repository do something
    return await this.documentRepository.create(command.document);
  }
}
