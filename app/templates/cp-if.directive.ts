import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[cpIf]'
})
export class CpIfDirective {
    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) { }
    @Input() set cpIf(condition: boolean) {
        if (condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}
