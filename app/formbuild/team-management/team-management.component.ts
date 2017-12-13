import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TeamManagementService } from '../team-management.service';
import { Department } from '../department';
import { Team } from '../team';
import { EmployeeForm } from '../employee';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']
})
export class TeamManagementComponent implements OnInit {
  teamForm: FormGroup;
  formSubmitted = false;
  allSkills: Observable<any[]>;
  constructor(
    private formBuilder: FormBuilder,
    private teamMngService: TeamManagementService) {
  }
  ngOnInit() {
    this.allSkills = this.teamMngService.getSkills();
    this.createTeamForm();
    this.addEmployee();
  }
  createTeamForm() {
    this.teamForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      teamManager: '',
      teamDept: this.formBuilder.group(new Department()),
      employees: this.formBuilder.array([])
    });
  }
  get empFormArray(): FormArray {
    return this.teamForm.get('employees') as FormArray;
  }
  addEmployee() {
    const fg = this.formBuilder.group(new EmployeeForm());
    this.empFormArray.push(fg);
  }
  deleteEmployee(idx: number) {
    this.empFormArray.removeAt(idx);
  }
  loadTeam(name: string) {
    this.teamMngService.getTeamByName(name)
      .subscribe(team => {
        this.createFormWithDefaultData(team);
      });
  }
  createFormWithDefaultData(team: Team) {
    // this.teamForm.patchValue(team);
    this.teamForm.patchValue({
      teamName: team.teamName,
      teamManager: team.teamManager,
      teamDept: team.teamDept
    });
    const employeeFormGroups = team.employees.map(employee => this.formBuilder.group(employee));
    const employeeFormArray = this.formBuilder.array(employeeFormGroups);
    this.teamForm.setControl('employees', employeeFormArray);
  }
  onFormSubmit() {
    const data = JSON.stringify(this.teamForm.value);
    console.log('-----Team in JSON Format-----');
    console.log(data);
    const team: Team = this.teamForm.value;
    this.teamMngService.saveTeam(team);
    this.formSubmitted = true;
    this.teamForm.reset();
  }
  resetTeamForm() {
    this.teamForm.reset({
      teamName: 'Java Team',
      teamManager: 'Yogi'
    });
  }
}
