export class CreateDocumentRequest {
  name: string;
  companyId: number;
  assignedUserId: number | null;
  content: string;
}
export class DeleteDocumentRequest {
  documentId: number;
}

export class AssignUserToDocumentRequest {
  userId: number;
  documentId: number;
}

export class MoodifyDocumentRequest {
  name: string | null;
  content: string | null;
}