import { Component, ContentChild } from '@angular/core';
import { CityComponent } from './city.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-address',
    template: `
        <b>{{title}}</b>
	<br/>City: {{city?.cityId}} - {{city?.cityName}}
  `
})
export class AddressQueryComponent {
    @ContentChild(CityComponent) city: CityComponent;
    title = 'Address';
}
