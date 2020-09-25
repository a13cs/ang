import { Directive } from '@angular/core';
import { Validator, ValidationErrors, FormGroup, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
})
export class LocationValidator implements Validator {
    
    validate(formGroup: FormGroup): ValidationErrors {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];


        console.log((<FormGroup>formGroup.root))  

        // console.log( (<AbstractControl>(<FormGroup>(<FormGroup>formGroup.root).root).controls['onlineUrl'])?.value )
        // console.log( (<FormGroup>(<FormGroup>formGroup.root).root).controls['onlineUrl'] )


        if( (onlineUrlControl && onlineUrlControl.value) || // todo
            (addressControl && addressControl.value && countryControl && countryControl.value && cityControl && cityControl.value) ) {
                return null; // OK
        } else {
            return {validateLocation: false, validateUrl: false}
        }

    }

    // registerOnValidatorChange?(fn: () => void): void {

    // }
    


}