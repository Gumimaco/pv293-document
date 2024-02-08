import { DocumentRepository } from 'src/infrastracture/data/document-repository/document.repository';
import { CreateDocumentCommand } from '../commands/createDocument.command';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { DocumentCreatedEvent } from 'src/core/events/documentCreated.event';
import { DeleteDocumentCommand } from '../commands/deleteDocument.command';
import { DocumentDeletedEvent } from 'src/core/events/documentDeleted.event';

@CommandHandler(DeleteDocumentCommand)
export class DeleteDocumentHandler
  implements ICommandHandler<DeleteDocumentCommand>
{
  constructor(private readonly documentRepository: DocumentRepository, private readonly eventBus: EventBus) {}

  async execute(command: DeleteDocumentCommand) {
    const obj = await this.documentRepository.delete(command.documentId);
    this.eventBus.publish(new DocumentDeletedEvent());
    return obj;
  }
}
