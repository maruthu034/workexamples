import { Component, ViewChild } from '@angular/core';
import { StopwatchComponent } from './stopwatch.component';

@Component({
    selector: 'app-stopwatch-parent',
    template: `
    <h3>@ViewChild using Component</h3>
    Stopwatch Example:
    <button type="button" (click)="startStopwatch()">Start</button>
    <button type="button" (click)="stopStopwatch()">Stop</button>
    <br/>
    <app-stopwatch></app-stopwatch> `
})
export class StopwatchParentComponent {
    @ViewChild(StopwatchComponent)
    private stopwatchComponent: StopwatchComponent;
    startStopwatch() {
        this.stopwatchComponent.start();
    }
    stopStopwatch() {
        this.stopwatchComponent.stop();
    }
}
