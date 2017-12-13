import { Component, ViewChild } from '@angular/core';
import { NumberComponent } from './number.component';

@Component({
    selector: 'app-number-parent',
    template: `
    <h3>@ViewChild using Component</h3>
    Number Example:
    <button type="button" (click)="increase()">Increase</button>
    <button type="button" (click)="decrease()">Decrease</button>
    <br/><br/>
    <app-number-counter></app-number-counter> `
})
export class NumberParentComponent {
    @ViewChild(NumberComponent)
    private numberComponent: NumberComponent;
    increase() {
        this.numberComponent.increaseByOne();
    }
    decrease() {
        this.numberComponent.decreaseByOne();
    }
}
