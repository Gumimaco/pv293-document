import { Document } from "../entities/document.entity";

export class DocumentDeletedEvent {
  constructor() {
    console.log("SOMEONE DELETED DOCUMENT!")
  }
}