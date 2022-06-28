import { Directive, Input } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms'
@Directive({
    selector:'[appComfirmEqualValidator]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:passwordvalidatorDirective,
        multi:true
    }]
})
export class passwordvalidatorDirective implements Validator{
   @Input() appComfirmEqualValidator!: string;
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
      const controlToCompare = control.parent?.get(this.appComfirmEqualValidator);
      if(controlToCompare&&controlToCompare.value!==control.value){
        return {'notEqual': true};
      }
      return null;
    }}
