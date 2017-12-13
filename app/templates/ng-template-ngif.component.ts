import { Component } from '@angular/core';

@Component({
    selector: 'app-ngif',
    template : `
    <h3>ng-template with ngIf</h3>
<button type="button" (click)="onToggle1()">Toggle</button>

<ng-template [ngIf]= "toggleFlag1" >
   <div>Hello World!</div>
</ng-template>

<h3>ng-template with ngIf-else</h3>

<button type="button" (click)="onToggle2()">Toggle</button>

<div *ngIf="toggleFlag2; else msgElseBlock" >
   <div>Hello World!</div>
</div>

<ng-template #msgElseBlock>
   <div>Else Block: Hello World! </div>
</ng-template>

<h3>ng-template with ngIf-then-else</h3>

<button type="button" (click)="onToggle3()">Toggle</button>

<div *ngIf="toggleFlag3; then thenBlock else elseBlock">

</div>
<ng-template #thenBlock>
    <div>Then Block: Hello World!</div>
</ng-template>
<ng-template #elseBlock>
    <div>Else Block: Hello World!</div>
</ng-template> `
})
export class NgTemplateNgIfComponent {
    toggleFlag1 = true;
    toggleFlag2 = true;
    toggleFlag3 = true;

    onToggle1() {
        this.toggleFlag1 = (this.toggleFlag1 === true) ? false : true;
    }
    onToggle2() {
        this.toggleFlag2 = (this.toggleFlag2 === true) ? false : true;
    }
    onToggle3() {
        this.toggleFlag3 = (this.toggleFlag3 === true) ? false : true;
    }
}
