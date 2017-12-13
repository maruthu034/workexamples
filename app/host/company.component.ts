import { Component } from '@angular/core';

@Component({
    selector: 'app-companyhost',
    template: `
          <h3>Company</h3>
	  <p>Welcome to Company Home</p>
	  <app-addresshost></app-addresshost>
  `,
    styleUrls: ['./company.component.css']
})
export class CompanyHostComponent {
}
