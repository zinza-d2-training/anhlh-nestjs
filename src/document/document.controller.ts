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

@Controller('/document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}
  @Get('/show-all')
  async findAll() {
    return await this.documentService.findAll();
  }
  @Post('/show/:id')
  async showLink(@Param() id: string) {
    return await this.documentService.showLink(id);
  }

  @UseGuards(JwtAuthGuard, IsAdmin)
  @Put('/update/:id')
  async updateDocument(
    @Param('id') id: string,
    @Body() body: UpdateDocumentDto,
  ) {
    return await this.documentService.updateDocument(id, body);
  }
}
