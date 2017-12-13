import { Component, ViewChild, ViewChildren, AfterViewInit, TemplateRef, ViewContainerRef, QueryList, ElementRef } from '@angular/core';
import { MessageDirectiveone } from './message.directive';
import { WriterComponent } from './writer.component';

@Component({
    selector: 'app-cp1-querylist',
    templateUrl: './cp1.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class Cp1ComponentQuerylist implements AfterViewInit {
    // QueryList + @ViewChildren + Directive
    @ViewChildren(MessageDirectiveone)
    private msgList: QueryList<MessageDirectiveone>;

    @ViewChild('msgTemp')
    private msgTempRef: TemplateRef<any>;

    // QueryList + @ViewChildren + Component
    @ViewChildren('bkWriter')
    allWriters: QueryList<WriterComponent>;

    showAllWriter = false;

    // QueryList + @ViewChildren + ElementRef
    @ViewChildren('pname')
    allPersons: QueryList<ElementRef>;

    ngAfterViewInit() {
        console.log('--- using QueryList.changes ---');
        this.allWriters.changes.subscribe(list => {
            list.forEach(writer => console.log(writer.writerName + ' - ' + writer.bookName));
        });
        console.log('--- using QueryList.forEach ---');
        this.msgList.forEach(messageDirective =>
            messageDirective.viewContainerRef.createEmbeddedView(this.msgTempRef));

        this.allWriters.forEach(writer => console.log(writer.writerName + ' - ' + writer.bookName));

        console.log('--- using QueryList.length ---');
        console.log(this.allWriters.length);

        console.log('--- using QueryList.find ---');
        const javaWriter = this.allWriters.find(writer => writer.bookName === 'Java Tutorials');
        console.log(javaWriter.writerName);

        console.log('--- using QueryList.map ---');
        const wnames = this.allWriters.map(writer => writer.writerName);
        for (const name of wnames) {
            console.log(name);
        }

        console.log('--- using QueryList.filter ---');
        const writers = this.allWriters.filter(writer => writer.writerName === 'Krishna');
        for (const w of writers) {
            console.log(w.bookName);
        }

        console.log('--- using QueryList.first ---');
        const firstEl = this.allPersons.first;
        console.log(firstEl.nativeElement.innerHTML);

        console.log('--- using QueryList.last ---');
        const lastEl = this.allPersons.last;
        console.log(lastEl.nativeElement.innerHTML);
    }
    onShowAllWriters() {
        this.showAllWriter = (this.showAllWriter === true) ? false : true;
    }
}
