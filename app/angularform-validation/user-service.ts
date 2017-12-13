import { Injectable } from '@angular/core';

import { User } from './user';
import { Profile } from './profile';

const profiles = [
    new Profile('dev', 'Developer'),
    new Profile('man', 'Manager'),
    new Profile('dir', 'Director')
];

@Injectable()
export class UserFormService {
    getPofiles(): Profile[] {
        return profiles;
    }
    createUser(user: User) {
        // console.log('User Name: ' + user.userName);
        // console.log('Gender: ' + user.gender);
        // console.log('Profile: ' + user.profile.prName);
        // console.log('T & C accepted?: ' + user.isTCAccepted);
        console.log('Primary Email: ' + user.primaryEmail);
        console.log('Secondary Email: ' + user.secondaryEmail);
        console.log('Official Email: ' + user.officialEmail);
    }
}
