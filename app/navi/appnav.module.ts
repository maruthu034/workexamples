import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppNavComponent } from './appnav.component';
import { HomeComponent } from './home/home.component';
import { ViewDetailComponent } from './home/view-detail.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './manage-book/update-book.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { BookService } from './services/book.service';
import { AppNavRoutingModule } from './appnav-routing.module';

@NgModule({
  imports: [
    FormsModule,
    AppNavRoutingModule,
    CommonModule
  ],
  declarations: [
    AppNavComponent,
    HomeComponent,
    ViewDetailComponent,
    AddBookComponent,
    ManageBookComponent,
    UpdateBookComponent
  ],
  providers: [BookService],
})
export class AppnavModule { }
