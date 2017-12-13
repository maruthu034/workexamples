import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custome-event',
  templateUrl: './custome-event.component.html',
  styleUrls: ['./custome-event.component.css']
})
export class CustomeEventComponent implements OnInit {

  constructor() { }
  isValid = true;
  msg1 = 'Hello World';
  msg2 = '';
  msg3 = '';

  h = 300;
  w = 200;
  bdr = 5;
  clspn = 2;

  setMsg(data: string) {
    console.log(data);
    this.msg1 = data;
  }
  changeText(mytext: string) {
    console.log(mytext);
    this.msg3 = mytext;
  }
  ngOnInit() {
  }

}
