import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
    selector: 'app-friend',
    template: `
	Friend Name: {{friendName}}
  `
})
export class FriendComponent implements AfterContentInit {
    @ContentChild('name') nameRef: ElementRef;

    get friendName(): String {
        return this.nameRef.nativeElement.innerHTML;
    }
    ngAfterContentInit() {
        console.log(this.friendName);
    }
}
