import { Component, ContentChild } from '@angular/core';

@Component({
    selector: 'app-person',
    template: `
    <app-writer-child>
    <book-child bookId="1" bookName="maruthupandi Tutorials" *ngIf="latestBook"></book-child>
    <book-child bookId="2" bookName="praveenkumar Angular 4" *ngIf="!latestBook"></book-child>
  </app-writer-child>
  <br/><button (click)="onChangeBook()">Change Book</button>

  <favourite-books-child>
  <book-child  bookId="1" bookName="Hibernate 4 Tutorials"></book-child >
  <book-child  bookId="2" bookName="Spring Boot Tutorials"></book-child >
  <favourite-books-child>
    <book-child  bookId="3" bookName="Learning JavaScript"></book-child >
  </favourite-books-child>
  <favourite-books-child *ngIf="showAllBook">
    <book-child  bookId="4" bookName="Thymeleaf Tutorials"></book-child >
    <book-child  bookId="5" bookName="Android Tutorials"></book-child >
  </favourite-books-child>
</favourite-books-child>
<br/><button (click)="onShowAllBooks()" >
  <label *ngIf="!showAllBook">Show More</label>
  <label *ngIf="showAllBook">Show Less</label>
</button>
<h1>Component using contentchild and content children</h1>
<app-address>
<app-city cityId="1" cityName="dindigul" *ngIf="homeTown"></app-city>
<app-city cityId="2" cityName="madurai" *ngIf="!homeTown"></app-city>
</app-address>
<br/>
<button (click)="onChangeCity()">Change City</button>
<app-favourite-cities>
<app-city cityId="1" cityName="Noida"></app-city>
<app-city cityId="2" cityName="Mumbai"></app-city>
<app-favourite-cities>
  <app-city cityId="3" cityName="Gurugram"></app-city>
</app-favourite-cities>
<app-favourite-cities *ngIf="showAllCity">
  <app-city cityId="4" cityName="New Delhi"></app-city>
  <app-city cityId="5" cityName="Bengaluru"></app-city>
</app-favourite-cities>
</app-favourite-cities>
<br/><button (click)="onShowAllCities()" >
<label *ngIf="!showAllCity">Show More</label>
<label *ngIf="showAllCity">Show Less</label>
</button>

<h1>Elementref using contentchild and content children</h1>
<app-friend>
<div #name *ngIf="bestFriend">Mahesh</div>
<div #name *ngIf="!bestFriend">Krishna</div>
</app-friend>
<br/><button (click)="onChangeFriend()">Change Friend</button>
<app-favourite-friends>
<div #name>Mohit</div>
<div #name>Anup</div>
<div #name *ngIf="showAllFriend">Nilesh</div>
<div #name *ngIf="showAllFriend">Sravan</div>
</app-favourite-friends>
<br/><button (click)="onShowAllFriends()" >
<label *ngIf="!showAllFriend">Show More</label>
<label *ngIf="showAllFriend">Show Less</label>
</button>
  `
})
export class PersonComponent {
    latestBook = true;
    showAllBook = false;
    homeTown = true;
    showAllCity = false;
    bestFriend = true;
    showAllFriend = false;
    onShowAllFriends() {
        this.showAllFriend = (this.showAllFriend === true) ? false : true;
    }
    onChangeFriend() {
        this.bestFriend = (this.bestFriend === true) ? false : true;
    }
    onShowAllCities() {
        this.showAllCity = (this.showAllCity === true) ? false : true;
    }
    onChangeCity() {
        this.homeTown = (this.homeTown === true) ? false : true;
    }
    onChangeBook() {
        this.latestBook = (this.latestBook === true) ? false : true;
    }
    onShowAllBooks() {
        this.showAllBook = (this.showAllBook === true) ? false : true;
    }
}

