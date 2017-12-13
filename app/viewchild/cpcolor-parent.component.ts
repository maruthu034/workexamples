import { Component, ViewChild } from '@angular/core';
import { CpColorDirective } from './cpcolor.directive';

@Component({
    selector: 'app-cpcolor-parent',
    template: `
    <h3>@ViewChild using Directive</h3>
    Color Example:
    <p cpColor>Change my Color </p>
    <div>
      Change Color:
      <input type="radio" name="rad" (click)= "changeColor('green')"> Green
      <input type="radio" name="rad" (click)= "changeColor('cyan')"> Cyan
      <input type="radio" name="rad" (click)= "changeColor('blue')"> Blue
    </div> `
})
export class CpColorParentComponent {
    @ViewChild(CpColorDirective)
    private cpColorDirective: CpColorDirective;
    changeColor(color: string) {
        this.cpColorDirective.change(color);
    }
}
