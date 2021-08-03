import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const validatePassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return (password === confirmPassword) ? null : {invalidPassword: true,};
};

@Directive({
  selector: '[appValidatePassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidatePasswordDirective,
    multi: true,
  }]
})
export class ValidatePasswordDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return validatePassword(control);
  }
}
