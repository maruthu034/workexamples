import { Component } from '@angular/core';

@Component({
    selector: 'app-stopwatch',
    template: '<h2>{{counter}}</h2>'
})
export class StopwatchComponent {
    shouldRun = false;
    counter = 0;
    start() {
        this.shouldRun = true;
        const interval = setInterval(() => {
            if (this.shouldRun === false) {
                clearInterval(interval);
            }
            this.counter = this.counter + 1;
        }, 1000);
    }
    stop() {
        this.shouldRun = false;
    }
}
