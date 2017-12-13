import { Component, ContentChildren, QueryList } from '@angular/core';
import { CityComponent } from './city.component';

@Component({
    selector: 'app-favourite-cities',
    template: `
        <b>Top Favourite  Cities</b>
	<ng-template ngFor let-city [ngForOf]= "topCities">
	   <br/>{{city.cityId}} - {{city.cityName}}
	</ng-template>
	<br/><b>All Favourite Cities</b>
	<ng-template ngFor let-city [ngForOf]= "allCities">
	   <br/>{{city.cityId}} - {{city.cityName}}
	</ng-template>
  `
})
export class FavouriteFriendsoneComponent {
    @ContentChildren(CityComponent) topCities: QueryList<CityComponent>;
    @ContentChildren(CityComponent, { descendants: true }) allCities: QueryList<CityComponent>;
}
