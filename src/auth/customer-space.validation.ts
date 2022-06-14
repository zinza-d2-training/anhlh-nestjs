import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

@ValidatorConstraint({ async: true })
export class CheckSpace implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const regex = '^\\S*$';
    const hasNotSpace = text.match(regex);
    if (hasNotSpace) {
      return true;
    }
    return false;
  }
}

export function AllowNotSpace(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'CheckSpace',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: CheckSpace,
    });
  };
}
