import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Employee } from '../../employee';

@Component({
  selector: 'app-employee-child',
  templateUrl: './employee-child.component.html',
  styleUrls: ['./employee-child.component.css']
})
export class EmployeeChildComponent implements OnChanges {
  @Input() employee: Employee;
  @Input() message: string;

  allMsgChangeLogs: string[] = [];
  allEmployeeChangeLogs: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:forin
    for (const propName in changes) {
      console.log('changes:', propName);
      const change = changes[propName];
      const curVal = JSON.stringify(change.currentValue);
      const prevVal = JSON.stringify(change.previousValue);
      const changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;
      console.log('changeLog:' , changeLog);
      if (propName === 'message') {
        this.allMsgChangeLogs.push(changeLog);
      } else if (propName === 'employee') {
        this.allEmployeeChangeLogs.push(changeLog);
      }
    }
  }
}



