import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-city',
    template: ``
})
export class CityComponent {
    @Input() cityId: string;
    @Input() cityName: string;
}
