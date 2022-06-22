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
import { JwtAuthGuard } from 'src/utils/jwt-auth.guard';
import { RegisterInjectionDto } from './register_injection.dto';
import { UpdateUserRegisterInjectionDto } from './update_user_register_injection.dto';
import { VaccineRegistrationService } from './vaccine_registration.service';

@Controller('/vaccine-registration')
export class VaccineRegistrationController {
  constructor(
    private vaccineRegistrationCService: VaccineRegistrationService,
  ) {}

  @Post('/')
  async createRegisterInjection(@Body() body: RegisterInjectionDto) {
    return await this.vaccineRegistrationCService.createRegisterInjection(body);
  }
  @Get('/')
  async getAllUserRegisterInjection() {
    return await this.vaccineRegistrationCService.getAllUserRegisterInjection();
  }
  @Get('/')
  async getUserRegisterInjection(@GetUser('id') id: string) {
    return await this.vaccineRegistrationCService.getUserRegisterInjection(id);
  }
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  async UpdateUserRegisterInjection(
    @Param('id') id: string,
    updateUserRegisterInjectionDto: UpdateUserRegisterInjectionDto,
  ) {
    return await this.vaccineRegistrationCService.updateUserRegisterInjection(
      id,
      updateUserRegisterInjectionDto,
    );
  }
}
