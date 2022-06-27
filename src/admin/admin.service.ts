import { Injectable, Post, StreamableFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import VaccinationSite from 'src/entities/vaccination_site';
import {
  CreateDataVaccinationSiteDto,
  UpdateDataVaccinationSiteDto,
} from './vaccination_site.dto';
import VaccineRegistration from 'src/entities/vaccine_registration';
import { UpdateUserRegisterInjectionDto } from './update_user_register_injection.dto';
import User from 'src/entities/user';
import { UpdateUserDto } from 'src/user/update_user.dto';
import { UpdateDocumentDto } from 'src/document/update_document.dto';
import Document from 'src/entities/document';
import * as bcrypt from 'bcrypt';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(VaccinationSite)
    private readonly vaccinationSite: Repository<VaccinationSite>,
    @InjectRepository(VaccineRegistration)
    private readonly vaccineRegistrationRepository: Repository<VaccineRegistration>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>,
  ) {}

  async createDataVaccinationSite(body: CreateDataVaccinationSiteDto) {
    return await this.vaccinationSite.save(body);
  }

  async updateDataVaccinationSite(
    id: string,
    body: UpdateDataVaccinationSiteDto,
  ) {
    const vaccinationSite = await this.vaccinationSite.findOne({
      where: { id },
    });
    if (!vaccinationSite) {
      return {
        message: 'vaccination Site does not exist',
        status: 422,
      };
    }
    return await this.vaccinationSite.update(vaccinationSite, body);
  }

  async getAllUserRegisterInjection() {
    return await this.vaccineRegistrationRepository.find();
  }

  async updateUserRegisterInjection(
    id: string,
    body: UpdateUserRegisterInjectionDto,
  ) {
    const userRegisterInjection =
      await this.vaccineRegistrationRepository.findOne({ where: { id } });
    if (!userRegisterInjection) {
      return {
        message: 'info register Injection does not exist',
        status: 422,
      };
    }
    return await this.vaccineRegistrationRepository.update(
      userRegisterInjection,
      body,
    );
  }

  async getAllUser() {
    return await this.userRepository.find();
  }

  async updateDocument(id: string, body: UpdateDocumentDto) {
    const document = await this.documentRepository.findOne({ where: { id } });
    return await this.documentRepository.update(document, body);
  }

  async uploadFile(file: Express.Multer.File, name: string) {
    const { filename } = file;
    await this.documentRepository.save({
      name: name,
      link: filename,
    });
    return {
      message: 'upload success',
    };
  }

  async getUser(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      return {
        message: 'user does not exist',
        status: 422,
      };
    }
    return user;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    const { password } = updateUserDto;
    if (!user) {
      return {
        message: 'user does not exist',
        status: 422,
      };
    }
    const saltRounds = 10;
    const hashPass = bcrypt.hashSync(password, saltRounds);

    return await this.userRepository.update(user, {
      ...updateUserDto,
      password: hashPass,
    });
  }
}
