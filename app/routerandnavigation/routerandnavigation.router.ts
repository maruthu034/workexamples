import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuardService } from '../authentication/services/auth-guard.service';
import { ViewDetailComponent } from './view-detail.component';
import { RouterandnavigationComponent } from './routerandnavigation.component';
import { AddBookComponent } from './add-book.component';
import { ManageBookComponent } from './manage-book.component';
import { UpdateBookComponent } from './update-book.component';

const naviroutes: Routes = [
    {
    path: '',
    component : RouterandnavigationComponent,
    canActivate: [AuthGuardService],
    children : [
    { path: 'home', component: HomeComponent },
    { path: 'view-detail/:id', component: ViewDetailComponent },
    { path: 'add-book', component: AddBookComponent },
    { path: 'manage-book', component: ManageBookComponent },
    { path: 'update-book/:id', component: UpdateBookComponent },
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(naviroutes)],
    exports: [RouterModule]
})
export class NavRoutingModule { }

// path: '',
// component: RouterandnavigationComponent,
// canActivate: [AuthGuardService],
// children: [
//     {
//         path: 'home',
//         component: HomeComponent,
//         canActivateChild: [AuthGuardService],
//     },
//     {
//         path: 'view-detail/:id',
//         component: ViewDetailComponent,
//         canActivateChild: [AuthGuardService],
//     },
//     {
//         path: 'add-book',
//         component: AddBookComponent,
//         canActivateChild: [AuthGuardService],
//     },
//     {
//         path: 'manage-book',
//         component: ManageBookComponent,
//         canActivateChild: [AuthGuardService],
//     },
//     {
//         path: 'update-book/:id',
//         component: UpdateBookComponent,
//         canActivateChild: [AuthGuardService],
//     },
// ]
// }