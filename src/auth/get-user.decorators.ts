import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserInterface } from '../user/type';
export const GetUser = createParamDecorator(
  (data: UserInterface, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user : 'ko có user';
  },
);
