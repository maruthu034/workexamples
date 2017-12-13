import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from './student';
import { Employee } from './employee';
@Component({
    selector: 'app-custome-person',
    template: `
    <div>
	<b>Id: {{student.id}} </b> <br/>
	<input [value]="student.fname"
		(input)="student.fname=$event.target.value" /> <br/>
	<input [value]="student.lname"
		(input)="student.lname=$event.target.value" /> <br/>
	<br/>
	<button (click)="update()">Update</button>
</div> `
})
export class CustomePersonComponent {
    @Input() prefixMsg: string;
    @Input() siteName: string;
    @Input() student: Student;
    @Output() updateEmployee = new EventEmitter<Employee>();
    employee = new Employee();
    update() {
        this.employee.fname = this.student.fname;
        this.employee.lname = this.student.lname;

        this.updateEmployee.emit(this.employee);
    }
}
