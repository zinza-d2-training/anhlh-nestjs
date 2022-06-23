import { PartialType } from '@nestjs/mapped-types';
import { RegisterInjectionDto } from './register_injection.dto';

export class UpdateUserRegisterInjectionDto extends PartialType(
  RegisterInjectionDto,
) {}
