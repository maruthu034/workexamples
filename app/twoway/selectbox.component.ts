import { Component, EventEmitter, Input } from '@angular/core';
@Component({
    selector: 'app-select-twoway',
    template:
        `<select [(ngModel)] ="myColor">
	<option *ngFor = "let color of cdColors" [value] = "color">
		{{color}}
	</option>
</select>

<p [style.color] = "myColor"> Hello World!</p> `
})
export class SelectBoxComponent {
    @Input() cdColors: Array<string>;
    myColor = 'GREEN';
}
