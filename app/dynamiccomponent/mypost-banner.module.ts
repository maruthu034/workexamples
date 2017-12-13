import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArticleComponent } from './article.component';
import { TechnologyComponent } from './technology.component';
import { MyPostService } from './service/mypost.service';
import { MyPostBannerComponent } from './mypost-banner.component';
import { MyPostComponent } from './mypost.component';
import { CommonModule } from '@angular/common';
import { dynamicRoutesModule } from './mypost-banner.router';
import { MyPostDirective } from './mypost.directive';

@NgModule({
      imports: [
            BrowserModule,
            dynamicRoutesModule
      ],
      declarations: [
            ArticleComponent,
            TechnologyComponent,
            MyPostBannerComponent,
            MyPostComponent,
            MyPostDirective
      ],
      entryComponents: [
            ArticleComponent,
            TechnologyComponent
      ],
      providers: [
            MyPostService,
      ]
})
export class MypostBannerModule { }
