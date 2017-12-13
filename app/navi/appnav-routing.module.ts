import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewDetailComponent } from './home/view-detail.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './manage-book/update-book.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { AppNavComponent } from './appnav.component';
import { AuthGuardService } from '../authentication/services/auth-guard.service';

const navroutes: Routes = [
	{
		path: '',
		component: AppNavComponent,
		canActivateChild: [AuthGuardService],
		children: [
			{ path: 'home', component: HomeComponent },
			{ path: 'view-detail/:id', component: ViewDetailComponent },
			{ path: 'add-book', component: AddBookComponent },
			{ path: 'manage-book', component: ManageBookComponent },
			{ path: 'update-book/:id', component: UpdateBookComponent },
			
		]
	}

];
@NgModule({
	imports: [RouterModule.forChild(navroutes)],
	exports: [RouterModule]
})
export class AppNavRoutingModule { }


// { path: 'home', component: HomeComponent },
// { path: 'view-detail/:id', component: ViewDetailComponent },
// { path: 'add-book', component: AddBookComponent },
// { path: 'manage-book', component: ManageBookComponent },
// { path: 'update-book/:id', component: UpdateBookComponent },
// { path: '', redirectTo: '/home', pathMatch: 'full' },
// { path: '**', component: PageNotFoundComponent }