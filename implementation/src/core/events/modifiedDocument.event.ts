export class ModifiedDocumentEvent {
  constructor(public readonly documentId: number) {
    console.log("SOMEONE MODIFIED DOCUMENT!")
  }
}