import { Directive, OnInit, OnDestroy, Input } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { Log } from './services/log';


@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[cp]'
})
export class CPDirective implements OnInit, OnDestroy {
    // tslint:disable-next-line:no-input-rename
    @Input('cp')
    personName: string;
    constructor(private loggerService: LoggerService) { }
    ngOnInit() {
        this.loggerService.createCP2Log(new Log('c', this.personName + ' is created.'));
    }
    ngOnDestroy() {
        this.loggerService.createCP2Log(new Log('r', this.personName + ' is removed.'));
    }
}
