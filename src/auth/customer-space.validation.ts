import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

@ValidatorConstraint({ async: true })
export class IsSpace implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const regex = '^\\S*$';
    const isSpace = text.match(regex);
    if (!isSpace) {
      return false;
    }
    return true;
  }
}

export function NotSpace(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsSpace',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: IsSpace,
    });
  };
}
