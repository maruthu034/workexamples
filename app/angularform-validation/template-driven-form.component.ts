import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserFormService } from './user-service';
import { User } from './user';
import { Profile } from './profile';

@Component({
    selector: 'app-template',
    templateUrl: './template-driven-form.component.html'
})
export class TemplateDrivenFormComponent implements OnInit {
    isValidFormSubmitted = false;
    validateEmail = true;
    emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    user = new User();
    allProfiles: Profile[];
    constructor(private userService: UserFormService) {
    }
    ngOnInit() {
        this.allProfiles = this.userService.getPofiles();
    }
    onFormSubmit(form: NgForm) {
        this.isValidFormSubmitted = false;
        if (form.invalid) {
            return;
        }
        this.isValidFormSubmitted = true;
        this.user = form.value;
        this.userService.createUser(this.user);
        form.resetForm();
    }
}
