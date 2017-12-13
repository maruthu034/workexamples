import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BookService } from '../provider/services/book.service';
import { NavRoutingModule } from './routerandnavigation.router';
import { ViewDetailComponent } from './view-detail.component';
import { RouterandnavigationComponent } from './routerandnavigation.component';
import { AddBookComponent } from './add-book.component';
import { ManageBookComponent } from './manage-book.component';
import { UpdateBookComponent } from './update-book.component';

@NgModule({
    imports: [
        FormsModule,
        NavRoutingModule,
        CommonModule
    ],
    declarations: [
        HomeComponent,
        ViewDetailComponent,
        RouterandnavigationComponent,
        AddBookComponent,
        ManageBookComponent,
        UpdateBookComponent
    ],
    providers: [BookService],
})
export class RouterNavigationModule { }

