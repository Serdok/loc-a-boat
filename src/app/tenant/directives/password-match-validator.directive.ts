import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control) {
    return null;
  }

  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password?.value === confirmPassword?.value ? null : {passwordsDoNotMatch: true,};
};

@Directive({
  selector: '[appPasswordMatchValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordMatchValidatorDirective, multi: true,}]
})
export class PasswordMatchValidatorDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return passwordMatchValidator(control);
  }
}
