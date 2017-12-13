import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-cptheme',
    template: `
    <h3>@ViewChild with Template Variable using ElementRef to access Native Element </h3>
    <div>
       Name: <input type="text" #name> <br/>
       City: <input type="text" #city>
    </div> `
})
export class CpThemeComponent implements AfterViewInit {
    @ViewChild('name')
    private elName: ElementRef;
    @ViewChild('city')
    private elCity: ElementRef;

    ngAfterViewInit() {
        this.elName.nativeElement.style.backgroundColor = 'yellow';
        this.elName.nativeElement.style.color = 'red';
        this.elCity.nativeElement.style.backgroundColor = 'blue';
        this.elCity.nativeElement.style.color = 'white';
    }
}
