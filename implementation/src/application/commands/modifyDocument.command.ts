export class ModifyDocumentCommand {
  constructor(public readonly id: number,
              public readonly content: string, 
              public readonly name: string) {}
}
