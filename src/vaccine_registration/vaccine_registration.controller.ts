import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RegisterInjectionDto } from './register_injection.dto';
import { VaccineRegistrationService } from './vaccine_registration.service';

@Controller('/vaccine-registration')
export class VaccineRegistrationController {
  constructor(private vaccineRegistrationService: VaccineRegistrationService) {}

  @Post('/')
  async createRegisterInjection(@Body() body: RegisterInjectionDto) {
    return await this.vaccineRegistrationService.createRegisterInjection(body);
  }

  @Get('/:id')
  async getUserRegisterInjection(@Param('id') id: string) {
    return await this.vaccineRegistrationService.getUserRegisterInjection(id);
  }
}
