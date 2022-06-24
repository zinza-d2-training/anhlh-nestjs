import { Controller, Get, Param } from '@nestjs/common';
import { VaccinationSiteService } from './vaccination_site.service';

@Controller('/vaccination-site')
export class VaccinationSiteController {
  constructor(
    private readonly vaccinationSiteService: VaccinationSiteService,
  ) {}
  @Get('/list')
  async getAllDataVaccinationSite() {
    return await this.vaccinationSiteService.getAllDataVaccinationSite();
  }
  @Get('/show/:id')
  async getDataVaccinationSite(@Param('id') id: string) {
    return await this.vaccinationSiteService.getDataVaccinationSite(id);
  }
}
