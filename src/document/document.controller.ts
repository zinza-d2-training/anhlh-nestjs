import {
  Controller,
  Body,
  Param,
  Get,
  Put,
  Post,
  UseGuards,
} from '@nestjs/common';
import { IsAdmin } from 'src/utils/check_admin.guard';
import { JwtAuthGuard } from 'src/utils/jwt-auth.guard';
import { DocumentService } from './document.service';
import { UpdateDocumentDto } from './update_document.dto';

@Controller('/documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}
  @Get('/')
  async findAll() {
    return await this.documentService.findAll();
  }
  @Post('/:id')
  async showLink(@Param() id: string) {
    return await this.documentService.showLink(id);
  }
}
