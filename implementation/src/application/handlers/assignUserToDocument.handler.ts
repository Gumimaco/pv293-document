import { DocumentRepository } from 'src/infrastracture/data/document-repository/document.repository';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { AssignUserToDocumentCommand } from '../commands/assignUserToDocument.command';
import { AssignedUserToDocument } from 'src/core/events/assignedUserToDocument.event';

@CommandHandler(AssignUserToDocumentCommand)
export class AssignUserToDocumentHandler
  implements ICommandHandler<AssignUserToDocumentCommand>
{
  constructor(private readonly documentRepository: DocumentRepository, private readonly eventBus: EventBus) {}

  async execute(command: AssignUserToDocumentCommand) {
    const obj = await this.documentRepository.assignUserToDocument(command.userId, command.documentId);
    this.eventBus.publish(new AssignedUserToDocument(command.userId, command.documentId));
    return obj;
  }
}
