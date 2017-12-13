import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
    selector: 'app-msg-twoway',
    template: `<input [value] = "cdMsg" (input)="update($event.target.value)"/> `
})
export class MsgComponent {
    @Input() cdMsg: string;
    @Output() cdMsgChange = new EventEmitter<string>();
    update(val: string) {
        this.cdMsg = val;
        this.cdMsgChange.emit(this.cdMsg);
    }
}
