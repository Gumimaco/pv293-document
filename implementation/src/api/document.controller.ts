import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateDocumentRequest } from 'src/application/document.model';
import { Document } from 'src/core/entities/document.entity';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ListDocumentsQuery } from 'src/application/queries/listDocuments.query';
import { CreateDocumentCommand } from 'src/application/commands/createDocument.command';
import { ListDocumentByIdQuery } from 'src/application/queries/listDocumentById.query';
import { DeleteDocumentCommand } from 'src/application/commands/deleteDocument.command';
@Controller('/api/documents')
export class DocumentController {
  constructor(private commandBus: CommandBus,
              private queryBus: QueryBus) {}

  @Get()
  async getDocuments() {
    return await this.queryBus.execute(new ListDocumentsQuery());;
  }

  @Get('/:id')
  async getDocument(@Param() params) {
    return await this.queryBus.execute(new ListDocumentByIdQuery(params.id));
  }

  @Post()
  async createDocument(@Body() newDocument: CreateDocumentRequest) {
    const document: Document = {
      ...newDocument,
      id: Math.floor(Math.random() * 1000),
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null,
    };
    return this.commandBus.execute(new CreateDocumentCommand(document));
  }

  @Delete('/:id')
  async deleteDocument(@Param() params) {
    return this.commandBus.execute(new DeleteDocumentCommand(params.id));
  }
}
