import { EmployeeForm } from './employee';
import { Department } from './department';

export class Team {
    teamName = '';
    teamManager = '';
    teamDept: Department;
    employees: EmployeeForm[];
}
