import { Component, OnInit, ElementRef, ViewChild , AfterViewInit } from '@angular/core';
import { NumberComponent } from './number.component';
import { StopwatchComponent } from './stopwatch.component';
import { CpColorDirective } from './cpcolor.directive';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})

export class ViewchildComponent implements AfterViewInit  {

  @ViewChild(NumberComponent)
  private numberComponent: NumberComponent;
  @ViewChild(StopwatchComponent)
  private stopwatchComponent: StopwatchComponent;
  @ViewChild(CpColorDirective)
  private cpColorDirective: CpColorDirective;
  @ViewChild('title')
  private elTitle: ElementRef;

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.elTitle.nativeElement.style.backgroundColor = 'red';
    this.elTitle.nativeElement.style.color = 'white';
  }
  increase() {
    this.numberComponent.increaseByOne();
  }
  decrease() {
    this.numberComponent.decreaseByOne();
  }
  startStopwatch() {
    this.stopwatchComponent.start();
  }
  stopStopwatch() {
    this.stopwatchComponent.stop();
  }
  changeColor(color: string) {
    this.cpColorDirective.change(color);
  }
}
