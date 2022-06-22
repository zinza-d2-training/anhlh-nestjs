import { Controller, Body, Param, Patch, Get } from '@nestjs/common';
import { DocumentService } from './document.service';
import { UpdateDocumentDto } from './update_document.dto';

@Controller('/document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}
  async findAll() {
    return await this.documentService.findAll();
  }
  async showLink(@Param() id: string) {
    return await this.documentService.showLink(id);
  }
  async updateDocument(@Param() id: string, @Body() body: UpdateDocumentDto) {
    return await this.documentService.updateDocument(id, body);
  }
}
