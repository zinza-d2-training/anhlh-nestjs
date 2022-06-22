import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../utils/jwt-auth.guard';
import {
  CreateDataVaccinationSiteDto,
  UpdateDataVaccinationSiteDto,
} from './vaccination_site.dto';
import { VaccinationSiteService } from './vaccination_site.service';

@Controller('/vaccination-site')
export class VaccinationSiteController {
  constructor(
    private readonly vaccinationSiteService: VaccinationSiteService,
  ) {}
  @Get('/')
  async getAllDataVaccinationSite() {
    return await this.vaccinationSiteService.getAllDataVaccinationSite();
  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async createDataVaccinationSite(@Body() body: CreateDataVaccinationSiteDto) {
    return await this.vaccinationSiteService.createDataVaccinationSite(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/update/:id')
  async updateDataVaccinationSite(
    @Param('id') id: string,
    @Body() body: UpdateDataVaccinationSiteDto,
  ) {
    return await this.vaccinationSiteService.updateDataVaccinationSite(
      id,
      body,
    );
  }
}
