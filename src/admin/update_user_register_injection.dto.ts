import { PartialType } from '@nestjs/mapped-types';
import { RegisterInjectionDto } from '../vaccine_registration/register_injection.dto';

export class UpdateUserRegisterInjectionDto extends PartialType(
  RegisterInjectionDto,
) {}
