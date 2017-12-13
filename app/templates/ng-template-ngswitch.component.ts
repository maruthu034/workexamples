import { Component } from '@angular/core';

@Component({
    selector: 'app-ngswitch',
    template: `
   <h3>ng-template with ngSwitch</h3>
   <input type="radio" name="direction" (click)="myDir='east'">East
   <input type="radio" name="direction" (click)="myDir='west'">West
   <input type="radio" name="direction" (click)="myDir='north'">North
   <input type="radio" name="direction" (click)="myDir='south'">South
   <br/><br/>
   <div [ngSwitch]="myDir">
     <ng-template [ngSwitchCase]= "'east'"> Go to <b>East</b> Direction </ng-template>
     <ng-template [ngSwitchCase]= "'west'"> Go to <b>West</b> Direction </ng-template>
     <ng-template [ngSwitchCase]= "'north'"> Go to <b>North</b> Direction </ng-template>
     <ng-template [ngSwitchCase]= "'south'">Go to <b>South</b> Direction </ng-template>
     <ng-template ngSwitchDefault> No Direction </ng-template>
   </div> `
})
export class NgTemplateNgSwitchComponent {
    myDir = '';
}
