import { Document
 } from "src/core/entities/document.entity";
export class CreateDocumentCommand {
  constructor(public readonly document: Document) {}
}
