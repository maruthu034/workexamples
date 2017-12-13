import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { Company } from './company';

@Component({
  selector: 'app-customepipe',
  templateUrl: './customepipe.component.html',
  styleUrls: ['./customepipe.component.css']
})
export class CustomepipeComponent implements OnInit {

  constructor() { }

  person: Person = new Person(1, 'maruthu', 30);

  message = 'My name is praveen';

  dividend = 23;
  divisor = 7;

  compName = 'ABCD LTD';
  compLocation = 'Varanasi';
  company = new Company(this.compName, this.compLocation);

  updateCompany() {
    this.company.cname = this.compName;
    this.company.location = this.compLocation;
  }
  createCompany() {
    this.company = new Company(this.compName, this.compLocation);
  }

  ngOnInit() {
  }

}
