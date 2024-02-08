export class AssignedUserToDocument {
  constructor(public readonly userId: number, public readonly documentId: number) {
    console.log("SOMEONE ASSIGNED USER TO DOCUMENT!")
  }
}