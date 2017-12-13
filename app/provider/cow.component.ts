import { Component } from '@angular/core';
import { AnimalService } from './services/animal.service';
import { CowService } from './services/cow.service';

@Component({
    selector: 'app-cow',
    providers: [
        { provide: AnimalService, useClass: CowService }
    ],
    template: `
	     <app-animal-details></app-animal-details>
	`
})
export class CowComponent {
}
