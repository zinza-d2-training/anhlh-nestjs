import { Controller, Body, Param, Patch, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './update_user.dto';
import { JwtAuthGuard } from 'src/utils/jwt-auth.guard';
import { GetUser } from 'src/auth/get-user.decorators';

@UseGuards(JwtAuthGuard)
@Controller('/user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('/info')
  findOne(@GetUser('id') id: string) {
    return this.UserService.findOne(id);
  }

  @Patch('/update')
  async update(
    @GetUser('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.UserService.update(+id, updateUserDto);
  }
}
