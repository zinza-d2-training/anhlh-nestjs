import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const IsAdmin = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    if (user.role === 'admin') {
      return true;
    }
    return false;
  },
);
