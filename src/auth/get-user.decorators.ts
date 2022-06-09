import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './regiter.interface';
export const GetUser = createParamDecorator(
  (data: User, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user : 'ko có user';
  },
);
