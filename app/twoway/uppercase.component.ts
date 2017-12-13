import { Component } from '@angular/core';
import { Employee } from './employee';
@Component({
    selector: 'app-upper-case-twoway',
    template: `
    <input [(ngModel)] ="employee.name"/>{{employee.name}}
    <br/><input [ngModel] ="employee.name" (ngModelChange) ="toUpper($event)"/> {{employee.name}} `
})
export class UpperCaseComponent {
    employee = new Employee(100, 'Mahesh Sharma');
    toUpper(val: string) {
        this.employee.name = val.toUpperCase();
    }
}
