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
import { UpdateUserRegisterInjectionDto } from './update_user_register_injection.dto';
import { UpdateUserDto } from 'src/user/update_user.dto';

@UseGuards(JwtAuthGuard, IsAdmin)
@Controller('/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('/vaccine-site/create')
  async createDataVaccinationSite(@Body() body: CreateDataVaccinationSiteDto) {
    return await this.adminService.createDataVaccinationSite(body);
  }

  @Put('/vaccine-site/update/:id')
  async updateDataVaccinationSite(
    @Param('id') id: string,
    @Body() body: UpdateDataVaccinationSiteDto,
  ) {
    return await this.adminService.updateDataVaccinationSite(id, body);
  }

  @Get('/vaccine-registration/show')
  async getAllUserRegisterInjection() {
    return await this.adminService.getAllUserRegisterInjection();
  }

  @Put('/vaccine-registration/:id')
  async UpdateUserRegisterInjection(
    @Param('id') id: string,
    @Body() updateUserRegisterInjectionDto: UpdateUserRegisterInjectionDto,
  ) {
    return await this.adminService.updateUserRegisterInjection(
      id,
      updateUserRegisterInjectionDto,
    );
  }

  @Get('/userAll')
  async getUser() {
    return await this.adminService.getAllUser();
  }

  @Put('user/:id')
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return await this.adminService.updateUser(id, body);
  }
}
