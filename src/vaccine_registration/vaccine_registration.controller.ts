import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { GetUser } from 'src/auth/get-user.decorators';
import { IsAdmin } from 'src/utils/check_admin.guard';
import { JwtAuthGuard } from 'src/utils/jwt-auth.guard';
import { RegisterInjectionDto } from './register_injection.dto';
import { UpdateUserRegisterInjectionDto } from './update_user_register_injection.dto';
import { VaccineRegistrationService } from './vaccine_registration.service';

@Controller('/vaccine-registration')
export class VaccineRegistrationController {
  constructor(private vaccineRegistrationService: VaccineRegistrationService) {}

  @Post('/')
  async createRegisterInjection(@Body() body: RegisterInjectionDto) {
    return await this.vaccineRegistrationService.createRegisterInjection(body);
  }
  @UseGuards(JwtAuthGuard, IsAdmin)
  @Get('/show')
  async getAllUserRegisterInjection() {
    return await this.vaccineRegistrationService.getAllUserRegisterInjection();
  }
  @Get('/showId')
  async getUserRegisterInjection(@GetUser('id') id: string) {
    return await this.vaccineRegistrationService.getUserRegisterInjection(id);
  }
  @UseGuards(JwtAuthGuard, IsAdmin)
  @Put('/:id')
  async UpdateUserRegisterInjection(
    @Param('id') id: string,
    @Body() updateUserRegisterInjectionDto: UpdateUserRegisterInjectionDto,
  ) {
    return await this.vaccineRegistrationService.updateUserRegisterInjection(
      id,
      updateUserRegisterInjectionDto,
    );
  }
}
