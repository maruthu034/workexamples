import { Component, ContentChildren, QueryList, ElementRef, AfterContentInit } from '@angular/core';

@Component({
    selector: 'app-favourite-friends',
    template: `
	<b>All Favourite Friends</b>
	<br/> {{allFriends}}
  `
})
export class FavouriteFriendsQueryComponent implements AfterContentInit {
    @ContentChildren('name') allFriendsRef: QueryList<ElementRef>;

    get allFriends(): string {
        return this.allFriendsRef ? this.allFriendsRef.map(f => f.nativeElement.innerHTML).join('/') : '';
    }
    ngAfterContentInit() {
        console.log(this.allFriends);
    }
}
