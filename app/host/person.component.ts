import { Component } from '@angular/core';

@Component({
    selector: 'app-personhost',
    template: `
          <h3>Person</h3>
	  <p>Welcome to Person Home</p>
	  <app-companyhost></app-companyhost>
  `,
    styleUrls: ['./person.component.css']
})
export class PersonHostComponent {
}
