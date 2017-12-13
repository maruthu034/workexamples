import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Employee } from '../employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  emp = new Employee('Mahesh', 20);
  msg = 'Hello World!';

  onFormSubmit(empForm: NgForm) {
    const name = empForm.controls['name'].value;
    const age = empForm.controls['age'].value;
    this.emp = new Employee(name, age);
  }
}
