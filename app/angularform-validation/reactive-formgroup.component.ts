import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserFormService } from './user-service';
import { User } from './user';

@Component({
    selector: 'app-group-reactive',
    templateUrl: './reactive-formgroup.component.html'
})
export class ReactiveFormgroupComponent implements OnInit {
    isValidFormSubmitted = null;
    validateEmail = true;
    emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    userForm = this.formBuilder.group({
        primaryEmail: ['', Validators.email],
        secondaryEmail: '',
        officialEmail: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
    });
    user = new User();
    constructor(private formBuilder: FormBuilder, private userService: UserFormService) {
    }
    ngOnInit() {
        this.userForm.get('secondaryEmail').setValidators(Validators.email);
    }
    onFormSubmit() {
        this.isValidFormSubmitted = false;
        if (this.userForm.invalid) {
            return;
        }
        this.isValidFormSubmitted = true;
        this.user = this.userForm.value;
        this.userService.createUser(this.user);
        this.userForm.reset();
    }
    get primaryEmail() {
        return this.userForm.get('primaryEmail');
    }
    get secondaryEmail() {
        return this.userForm.get('secondaryEmail');
    }
    get officialEmail() {
        return this.userForm.get('officialEmail');
    }
}

