import { Controller, Get } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('/data-administrative-unit')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Get('/')
  async getAdministrativeUnit() {
    return this.locationService.getUnitAdministrative();
  }
}
