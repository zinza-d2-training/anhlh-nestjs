import { HttpException, HttpStatus } from '@nestjs/common';

interface ErrorsBag {
  [key: string]: string[];
}

export class ValidateUserException extends HttpException {
  constructor(errorsBag: ErrorsBag) {
    super(errorsBag, HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
