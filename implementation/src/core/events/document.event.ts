export class DocumentCreatedEvent {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly companyId: string,
    public readonly assignedUserId: string,
    public readonly content: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly deletedAt: Date,
  ) {}
}
export class DocumentEditedEvent {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly companyId: string,
    public readonly assignedUserId: string,
    public readonly content: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly deletedAt: Date,
  ) {}
}
export class DocumentDeletedEvent {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly companyId: string,
    public readonly assignedUserId: string,
    public readonly content: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly deletedAt: Date,
  ) {}
}
export class DocumentAssignedEvent {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly companyId: string,
    public readonly assignedUserId: string,
    public readonly content: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly deletedAt: Date,
  ) {}
}
