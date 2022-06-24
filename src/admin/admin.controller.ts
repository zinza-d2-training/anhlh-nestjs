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
<<<<<<< HEAD
import { UpdateUserRegisterInjectionDto } from './update_user_register_injection.dto';

@UseGuards(JwtAuthGuard, IsAdmin)
=======

>>>>>>> master
@Controller('/admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

<<<<<<< HEAD
  @Post('/vaccine-sites')
=======
  @UseGuards(JwtAuthGuard, IsAdmin)
  @Post('/vaccine-registrations')
>>>>>>> master
  async createDataVaccinationSite(@Body() body: CreateDataVaccinationSiteDto) {
    return await this.adminService.createDataVaccinationSite(body);
  }

<<<<<<< HEAD
  @Put('/vaccine-sites/:id')
=======
  @UseGuards(JwtAuthGuard, IsAdmin)
  @Put('/vaccine-registrations/:id')
>>>>>>> master
  async updateDataVaccinationSite(
    @Param('id') id: string,
    @Body() body: UpdateDataVaccinationSiteDto,
  ) {
    return await this.adminService.updateDataVaccinationSite(id, body);
  }
<<<<<<< HEAD

  @Get('/vaccine-registrations')
  async getAllUserRegisterInjection() {
    return await this.adminService.getAllUserRegisterInjection();
  }

  @Put('/vaccine-registrations/:id')
  async UpdateUserRegisterInjection(
    @Param('id') id: string,
    @Body() updateUserRegisterInjectionDto: UpdateUserRegisterInjectionDto,
  ) {
    return await this.adminService.updateUserRegisterInjection(
      id,
      updateUserRegisterInjectionDto,
    );
  }
=======
>>>>>>> master
}
