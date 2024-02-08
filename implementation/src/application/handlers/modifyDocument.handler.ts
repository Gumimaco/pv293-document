import { DocumentRepository } from 'src/infrastracture/data/document-repository/document.repository';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { AssignUserToDocumentCommand } from '../commands/assignUserToDocument.command';
import { AssignedUserToDocument } from 'src/core/events/assignedUserToDocument.event';
import { ModifyDocumentCommand } from '../commands/modifyDocument.command';
import { ModifiedDocumentEvent } from 'src/core/events/modifiedDocument.event';

@CommandHandler(ModifyDocumentCommand)
export class ModifyDocumentHandler
  implements ICommandHandler<ModifyDocumentCommand>
{
  constructor(private readonly documentRepository: DocumentRepository, private readonly eventBus: EventBus) {}

  async execute(command: ModifyDocumentCommand) {
    const obj = await this.documentRepository.updateContent(command.id, command.content, command.name);
    this.eventBus.publish(new ModifiedDocumentEvent(command.id));
    return obj;
  }
}
