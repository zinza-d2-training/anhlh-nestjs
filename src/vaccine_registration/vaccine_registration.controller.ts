import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorators';
import { JwtAuthGuard } from 'src/utils/jwt-auth.guard';
import { RegisterInjectionDto } from './register_injection.dto';
import { UpdateUserRegisterInjectionDto } from './update_user_register_injection.dto';
import { VaccineRegistrationService } from './vaccine_registration.service';

@Controller('/vaccine-registrations')
export class VaccineRegistrationController {
  constructor(private vaccineRegistrationService: VaccineRegistrationService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async createRegisterInjection(
    @GetUser('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserRegisterInjectionDto,
  ) {
    return await this.vaccineRegistrationService.createRegisterInjection(
      id,
      body,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('/shows/:id')
  async getUserRegisterInjection(@GetUser('id') id: string) {
    return await this.vaccineRegistrationService.getUserRegisterInjection(id);
  }
}
