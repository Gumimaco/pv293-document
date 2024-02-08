import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateDocumentRequest } from "../application/document.model";
import { CreateDocumentCommand } from "../application/commands/createDocument.command";
import { Document } from "src/core/entities/document.entity";
import { ListDocumentsQuery } from "src/application/queries/listDocuments.query";

@Injectable()
export class DocumentService {
  constructor(private commandBus: CommandBus,
              private queryBus: QueryBus) {}

  async createDocument(newDocument: CreateDocumentRequest) {
    const document: Document = {
      ...newDocument,
      id: Math.floor(Math.random() * 1000),
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null,
    };
    return await this.commandBus.execute(new CreateDocumentCommand(document));
  }
  async getDocuments() {
    return await this.queryBus.execute(new ListDocumentsQuery());
  }

}

