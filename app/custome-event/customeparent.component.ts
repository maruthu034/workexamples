import { Component } from '@angular/core';
import { Student } from './student';
@Component({
    selector: 'app-custom-event',
    template: `
    <h3>{{title}}</h3>
    <app-custome-person (updateEmployee) ="saveData($event)"
        [student] ="studentObj"> </app-custome-person>
    <p>{{studentObj.fname + ' '+ studentObj.lname}} </p>
    <p>{{fullName}}</p>
    <h1>propertybinding examples</h1>
    Logo: <img [src]="website.logo"/>
        <br/>Logo: <img bind-src="website.logo"/>
        <br/>Logo: <img src="{{website.logo}}"/>
        <br/>Url: <a [href]="website.url" [textContent]="website.name"> </a>
        <br/>Url: <a bind-href="website.url" bind-textContent="website.name"> </a>
        <br/>Url: <a href="{{website.url}}" textContent="{{website.name}}"> </a>
        <p [textContent]="website.description"> </p>
        <p bind-textContent="website.description"> </p>
        <p textContent="{{website.description}}"> </p>
        <br/><button [disabled]="flag">Submit</button>
        <br/><button bind-disabled="!flag">Submit</button>
        <p [ngClass]="'one two'"> Angular 2 Property Binding Example </p>
        <p bind-ngClass="'one two'"> Angular 2 Property Binding Example </p>
        <p ngClass="{{'one two'}}"> Angular 2 Property Binding Example </p>
    `
})
export class CustomeParentComponent {
    title = 'custome propertybind and event binding';
    fullName = '';
    studentObj = new Student(100, 'Mahesh', 'Sharma');
    flag = true;
    website = {
        name: 'ConcretePage',
        url: 'http://www.concretepage.com',
        logo: 'assets/logo.png',
        description: 'Learn angular 2 property binding.'
    };
    saveData(emp) {
        this.fullName = emp.fname + ' ' + emp.lname;
    }

}
