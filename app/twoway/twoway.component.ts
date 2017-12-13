import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {

  constructor() { }

  msg = 'Hello World';
  myMsg = 'Hello World!';
  city = 'Varanasi';

  textSize = 20;
  colors = ['RED', 'GREEN', 'YELLOW'];
  emp = new Employee(1, 'Mohan Das');

  ngOnInit() {
  }

}
