import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateDocumentDto } from './update_document.dto';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>,
  ) {}
  async findAll() {
    return await this.documentRepository.find();
  }
  async showLink(id: string) {
    return await this.documentRepository.findOne({ where: { id } });
  }
  async updateDocument(id: string, body: UpdateDocumentDto) {
    const document = await this.documentRepository.findOne({ where: { id } });
    return await this.documentRepository.update(document, body);
  }
}
