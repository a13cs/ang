import { FormControl } from '@angular/forms';

export function restrictedWords(words) {
    return (control: FormControl) : {[key: string]:any} => 
    {
        if(!words) return null;
        var invalidWords = words.filter(w => control.value.includes(w))

        return invalidWords && invalidWords.length ? {'restrictedWords': invalidWords.join(',')} : null
    }
}
