import { Document } from "../entities/document.entity";

export class DocumentCreatedEvent {
  constructor(public readonly document: Document
  ) {
    console.log("SOMEONE CREATED DOCUMENT!")
  }
}