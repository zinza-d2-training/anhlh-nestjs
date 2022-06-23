import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { IsAdmin } from 'src/utils/check_admin.guard';
import { JwtAuthGuard } from '../utils/jwt-auth.guard';
import {
  CreateDataVaccinationSiteDto,
  UpdateDataVaccinationSiteDto,
} from './vaccination_site.dto';
import { AdminService } from './admin.service';

@Controller('/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @UseGuards(JwtAuthGuard, IsAdmin)
  @Post('/vaccine-registration/create')
  async createDataVaccinationSite(@Body() body: CreateDataVaccinationSiteDto) {
    return await this.adminService.createDataVaccinationSite(body);
  }

  @UseGuards(JwtAuthGuard, IsAdmin)
  @Put('/vaccine-registration/update/:id')
  async updateDataVaccinationSite(
    @Param('id') id: string,
    @Body() body: UpdateDataVaccinationSiteDto,
  ) {
    return await this.adminService.updateDataVaccinationSite(id, body);
  }
}
