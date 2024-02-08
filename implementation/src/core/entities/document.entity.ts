export class Document {
  id: number;
  name: string;
  companyId: number;
  assignedUserId: number | null;
  content: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
