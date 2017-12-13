import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
    selector: 'app-alias-twoway',
    template: `
    <input [(ngModel)] ="strCity" />
    <button (click)="emitCity()" >Update</button> `
})
export class AliasComponent {
    @Input('myCity') strCity: string;
    @Output('myCityChange') cityObj = new EventEmitter<string>();
    emitCity() {
        this.cityObj.emit(this.strCity);
    }
}
