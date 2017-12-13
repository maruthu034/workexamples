import { Component, ViewChild, ViewChildren, AfterViewInit, TemplateRef, ViewContainerRef, QueryList } from '@angular/core';
import { MessageDirective } from './message.directive';

@Component({
    selector: 'app-msg',
    template: `
   <h3>ng-template with TemplateRef and ViewContainerRef</h3>
   <ng-template #msg>
      Welcome to you.<br/>
      Happy learning!
   </ng-template>
   <h3>Message </h3>
   <div cpMsg> </div>
   <h3>Message2 </h3>
   <div cpMsg> </div> `
})
export class CpMsgComponent implements AfterViewInit {
    @ViewChild('msg')
    private msgTempRef: TemplateRef<any>

    @ViewChildren(MessageDirective)
    private queryList: QueryList<MessageDirective>

    ngAfterViewInit() {
        this.queryList.map(messageDirective =>
            messageDirective.viewContainerRef.createEmbeddedView(this.msgTempRef));
    }
}
