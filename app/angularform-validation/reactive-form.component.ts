import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserFormService } from './user-service';
import { User } from './user';
import { Profile } from './profile';

@Component({
    selector: 'app-reactive',
    templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
    isValidFormSubmitted = null;
    emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    allProfiles: Profile[];
    userForm = new FormGroup({
        userName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]),
        gender: new FormControl('', Validators.required),
        profile: new FormControl('', Validators.required),
        isTCAccepted: new FormControl('', Validators.required),
    });
    user = new User();
    constructor(private userService: UserFormService) {
    }
    ngOnInit() {
        this.allProfiles = this.userService.getPofiles();
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
    get userName() {
        return this.userForm.get('userName');
    }
    get gender() {
        return this.userForm.get('gender');
    }
    get profile() {
        return this.userForm.get('profile');
    }
    get isTCAccepted() {
        return this.userForm.get('isTCAccepted');
    }
}
