import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const fileTypeValidator = (type: RegExp): ValidatorFn => (control: AbstractControl): ValidationErrors | null => {
  if (!control?.value) {
    return null;
  }

  const file: File = control.value;
  const allowed = type.test(file.type);
  return allowed ? null : { invalidFileType: { value: control.value, }, };
};

@Directive({
  selector: '[appFileTypeValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: FileTypeValidatorDirective, multi: true, }]
})
export class FileTypeValidatorDirective implements Validator {
  @Input('appFileTypeValidator') type: string = null;

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.type ? fileTypeValidator(new RegExp(this.type, 'i'))(control) : null;
  }
}
