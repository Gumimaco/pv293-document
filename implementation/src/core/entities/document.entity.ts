export class Document {
  id: string;
  name: string;
  companyId: string;
  assignedUsersId: string[];
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
