import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPostBannerComponent } from './mypost-banner.component';

const dynamicRoutes: Routes = [
    {
        path: '',
        component: MyPostBannerComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(dynamicRoutes)],
    exports: [RouterModule]
})
export class dynamicRoutesModule { }
