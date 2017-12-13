import { Component } from '@angular/core';

@Component({
    selector: 'app-number-counter',
    template: '<b>{{message}}</b>'
})
export class NumberComponent {
    message = '';
    count = 0;
    increaseByOne() {
        this.count = this.count + 1;
        this.message = 'Counter: ' + this.count;
    }
    decreaseByOne() {
        this.count = this.count - 1;
        this.message = 'Counter: ' + this.count;
    }
}
