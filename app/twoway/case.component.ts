import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
    selector: 'app-case-twoway',
    template: `
    <input type="radio" name="case" (click) = "changeCase('upper')">Upper Case<br>
    <input type="radio" name="case" (click) = "changeCase('lower')"> Lower Case<br> `
})
export class CaseComponent {
    @Input() myName: string;
    @Output() myNameChange = new EventEmitter<string>();
    changeCase(val: string) {
        if (val === 'upper') {
            this.myName = this.myName.toUpperCase();
        } else {
            this.myName = this.myName.toLowerCase();
        }
        this.myNameChange.emit(this.myName);
    }
}
