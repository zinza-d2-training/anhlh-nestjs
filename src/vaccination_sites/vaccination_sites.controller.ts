import { Controller, Get, Param } from '@nestjs/common';
import { VaccinationSiteService } from './vaccination_site.service';

@Controller('/vaccination-sites')
export class VaccinationSiteController {
  constructor(
    private readonly vaccinationSiteService: VaccinationSiteService,
  ) {}
  @Get('/lists')
  async getAllDataVaccinationSite() {
    return await this.vaccinationSiteService.getAllDataVaccinationSite();
  }
  @Get('/shows/:id')
  async getDataVaccinationSite(@Param('id') id: string) {
    return await this.vaccinationSiteService.getDataVaccinationSite(id);
  }
}
