import { Controller, Body, Param, Patch, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './update_user.dto';
import { JwtAuthGuard } from 'src/utils/jwt-auth.guard';
import { GetUser } from 'src/auth/get-user.decorators';
import { IsUser } from 'src/utils/check_user.guard';

@UseGuards(JwtAuthGuard, IsUser)
@Controller('/user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.UserService.findOne(id);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.UserService.update(+id, updateUserDto);
  }
}
