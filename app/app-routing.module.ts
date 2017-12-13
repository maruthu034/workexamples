import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './authentication/services/auth-guard.service';
import { DashboardLayoutComponent } from './layout/dashboard.layout.component';
import { AddressComponent } from './address/address.component';
import { MypostBannerModule } from './dynamiccomponent/mypost-banner.module';
import { MyPostBannerComponent } from './dynamiccomponent/mypost-banner.component';
import { TechnologyComponent } from './dynamiccomponent/technology.component';
import { EmployeeComponent } from './employee/employee.component';
import { TeamManagementComponent } from './formbuild/team-management/team-management.component';
import { ProviderComponent } from './provider/provider.component';
import { AnimalDetailsComponent } from './provider/animal-details.component';
import { Provider2Component } from './provider2/provider2.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TemplatesComponent } from './templates/templates.component';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { QuerylistComponent } from './querylist/querylist.component';
import { ContentchildComponent } from './contentchild/contentchild.component';
import { AngularformValidationComponent } from './angularform-validation/angularform-validation.component';
import { CustomeEventComponent } from './custome-event/custome-event.component';
import { RouterandnavigationComponent } from './routerandnavigation/routerandnavigation.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { TwowayComponent } from './twoway/twoway.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { CustomepipeComponent } from './customepipe/customepipe.component';
import { HostComponent } from './host/host.component';
import { UrlSearchParamsComponent } from './url-search-params/url-search-params.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/article',
        pathMatch: 'full'
    },
    {
        path: '',
        component: DashboardLayoutComponent,
        canActivate: [AuthGuardService],
        children: [{
            path: 'article',
            loadChildren: './article/article.module#ArticleModule'
        },
        {
            path: 'address',
            component: AddressComponent,
            canActivateChild : [AuthGuardService]
        },
        {
            path: 'dynamic',
            component: MyPostBannerComponent
        },
        {
            path: 'onchnage',
            component: EmployeeComponent
        },
        {
            path: 'formbuild',
            component: TeamManagementComponent
        },
        {
            path: 'provider',
            component: ProviderComponent
        },
        {
            path: 'Renderer2',
            component: Provider2Component
        },
        {
            path: 'lifecycle',
            component: LifecycleComponent
        },
        {
            path: 'ngtemplate',
            component: TemplatesComponent
        },
        {
            path: 'crud',
            component: CrudOperationComponent
        },
        {
            path: 'querylist',
            component: QuerylistComponent
        },
        {
            path: 'contentchild',
            component: ContentchildComponent
        },
        {
            path: 'formvalidation',
            component: AngularformValidationComponent
        },
        {
            path: 'customeevent',
            component: CustomeEventComponent
        },
        {
            path: 'routerandnavigation',
            loadChildren: './routerandnavigation/routerandnavigation.module#RouterNavigationModule'
        },
        {
            path: 'country',
            loadChildren: './country/country.module#CountryModule',
        },
        {
            path: 'twoway',
            component: TwowayComponent,
        },
        {
            path: 'viewchild',
            component: ViewchildComponent,
        },
        {
            path: 'customepipe',
            component: CustomepipeComponent,
        },
        {
            path: 'host',
            component: HostComponent,
        },
        {
            path: 'Urlsearch',
            component: UrlSearchParamsComponent,
        }
        ]
    },
    {
        path: 'login',
        loadChildren: './authentication/auth.module#AuthModule'
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
