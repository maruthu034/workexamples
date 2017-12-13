import { Component } from '@angular/core';

@Component({
    selector: 'app-cp2-querylist',
    templateUrl: './cp2.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class Cp2ComponentQuerylist {
    showAllBook = false;
    onShowAllBooks() {
        this.showAllBook = (this.showAllBook === true) ? false : true;
    }
}
