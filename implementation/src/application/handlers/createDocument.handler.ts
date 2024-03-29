import { DocumentRepository } from 'src/infrastracture/data/document-repository/document.repository';
import { CreateDocumentCommand } from '../commands/createDocument.command';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { DocumentCreatedEvent } from 'src/core/events/documentCreated.event';

@CommandHandler(CreateDocumentCommand)
export class CreateDocumentHandler
  implements ICommandHandler<CreateDocumentCommand>
{
  constructor(private readonly documentRepository: DocumentRepository, private readonly eventBus: EventBus) {}

  async execute(command: CreateDocumentCommand) {
    const obj = await this.documentRepository.create(command.document);
    this.eventBus.publish(new DocumentCreatedEvent(command.document));
    return obj;
  }
}
