import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { Log } from './services/log';
import { Person } from './services/person';


@Component({
    selector: 'app-cp2',
    templateUrl: './cp2.component.html'
})
export class CP2Component implements OnInit {
    persons: Person[] = [];
    name: string;
    allLogs: Log[] = [];
    constructor(private loggerService: LoggerService) { }
    ngOnInit() {
        this.allLogs = this.loggerService.getAllCP2Logs();
    }
    add() {
        let personId = 0;
        const maxIndex = this.persons.length - 1;
        if (maxIndex === -1) {
            personId = 1;
        } else {
            const personWithMaxIndex = this.persons[maxIndex];
            personId = personWithMaxIndex.id + 1;
        }
        this.persons.push(new Person(personId, this.name));
        this.name = '';
    }
    remove(personId: number) {
        const item = this.persons.find(ob => (ob.id === personId));
        const itemIndex = this.persons.indexOf(item);
        this.persons.splice(itemIndex, 1);
    }
}
