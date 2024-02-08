export class CreateDocumentRequest {
  name: string;
  companyId: number;
  assignedUserId: number | null;
  content: string;
}
export class DeleteDocumentRequest {
  documentId: number;
}