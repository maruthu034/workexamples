import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-writer',
    template: `
       {{writerName}} - {{bookName}}
  `
})
export class WriterComponent {
    // tslint:disable-next-line:no-input-rename
    @Input('name') writerName: string;
    // tslint:disable-next-line:no-input-rename
    @Input('book') bookName: string;
}
