import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-ngfor',
    template: `
    <h3>ng-template with ngFor</h3>
    <ng-template ngFor let-person [ngForOf]= "allPersons" let-i="index">
      <p>{{i + 1}}. {{person.name}} : {{person.age}} </p>
    </ng-template>
    <ng-template ngFor let-person [ngForOf]="allPersons" let-i="index" let-isEven="even" let-isOdd="odd" let-isFirst="first" let-isLast="last" [ngForTrackBy]="trackByFn">
    <div>
    <font color="blue" *ngIf="isEven" >{{i + 1}} - {{person.name}} - {{person.age}} </font>
    <font color="red" *ngIf="isOdd">{{i + 1}} - {{person.name}} - {{person.age}} </font> 
  </div>
  </ng-template>
  <ng-template ngFor let-person [ngForOf]="allPersons" let-i="index" let-isEven="even" let-isOdd="odd" let-isFirst="first" let-isLast="last" [ngForTrackBy]="trackByFn">
  <div>
  <font color="green" *ngIf="isFirst; else elseBlock1">{{i + 1}}- {{person.name}} - {{person.age}} </font>  
  <ng-template #elseBlock1>   
     <font color="yellow" *ngIf="isLast; else elseBlock2">{{i + 1}} - {{person.name}} - {{person.age}} </font>  
     <ng-template #elseBlock2>   
         {{i + 1}}: {{person.personId}} - {{person.name}} - {{person.age}}
     </ng-template>	  
  </ng-template>      
</div>
</ng-template>
<but
    `
})
export class NgTemplateNgForComponent {
    allPersons = [
        { name: 'Mahesh', age: '25' },
        { name: 'Shakti', age: '23' },
        { name: 'Krishna', age: '23' },
        { name: 'Radha', age: '21' },
    ];

}

