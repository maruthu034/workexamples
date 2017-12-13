import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { Log } from './services/log';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  cp1log: Log;
  constructor(private loggerService: LoggerService) { }
  showCP1 = true;
  showCounter = true;
  ngOnInit() {
    this.cp1log = this.loggerService.getCP1Log();
  }
  onToggleCP1() {
    this.showCP1 = (this.showCP1 === true) ? false : true;
  }
  onToggleCounter() {
    this.showCounter = (this.showCounter === true) ? false : true;
  }
}

