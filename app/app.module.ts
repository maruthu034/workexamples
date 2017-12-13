import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardLayoutComponent } from './layout/dashboard.layout.component';
import { AddressComponent } from './address/address.component';
import { LogoutComponent } from './authentication/logout.component';
import { AuthGuardService } from './authentication/services/auth-guard.service';
import { AuthService } from './authentication/services/auth.service';
import { MypostBannerModule } from './dynamiccomponent/mypost-banner.module';
import { ArticleComponent } from './dynamiccomponent/article.component';
import { TechnologyComponent } from './dynamiccomponent/technology.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeChildComponent } from './employee/employee-child/employee-child.component';
import { TeamManagementComponent } from './formbuild/team-management/team-management.component';
import { TeamManagementService } from './formbuild/team-management.service';
import { ProviderComponent } from './provider/provider.component';
import { CowComponent } from './provider/cow.component';
import { LionComponent } from './provider/lion.component';
import { AnyAnimalComponent } from './provider/any-animal.component';
import { AnimalDetailsComponent } from './provider/animal-details.component';
import { ComputerComponent } from './provider/computer.component';
import { BookComponent } from './provider/book.component';
import { BookFactoryComponent } from './provider/book-factory.component';
import { Provider2Component } from './provider2/provider2.component';
import { AppendDemoComponent } from './provider2/append-demo.component';
import { CP2Directive } from './provider2/cp2.directive';
import { CP3Directive } from './provider2/cp3.directive';
import { CP4Directive } from './provider2/cp4.directive';
import { CP5Directive } from './provider2/cp5.directive';
import { CP6Directive } from './provider2/cp6.directive';
import { CP7Directive } from './provider2/cp7.directive';
import { CP8Directive } from './provider2/cp8.directive';
import { CP9Directive } from './provider2/cp9.directive';
import { CP10Directive } from './provider2/cp10.directive';
import { CP11Directive } from './provider2/cp11.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { CP2Component } from './lifecycle/cp2.component';
import { LoggerService } from './lifecycle/services/logger.service';
import { CPDirective } from './lifecycle/cp.directive';
import { CP1Component } from './lifecycle/cp1.component';
import { CounterComponent } from './lifecycle/counter.component';
import { TemplatesComponent } from './templates/templates.component';
import { NgTemplateNgForComponent } from './templates/ng-template-ngfor.component';
import { NgTemplateNgIfComponent } from './templates/ng-template-ngif.component';
import { NgTemplateNgSwitchComponent } from './templates/ng-template-ngswitch.component';
import { MessageDirective } from './templates/message.directive';
import { CpMsgComponent } from './templates/cp-msg.component';
import { CpIfDemoComponent } from './templates/cp-if-demo.component';
import { CpIfDirective } from './templates/cp-if.directive';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { QuerylistComponent } from './querylist/querylist.component';
import { ContentchildComponent } from './contentchild/contentchild.component';
import { Cp1ComponentQuerylist } from './querylist/cp1.component';
import { WriterComponent } from './querylist/writer.component';
import { Cp2ComponentQuerylist } from './querylist/cp2.component';
import { FavouriteFriendsComponent } from './querylist/favourite-friends.component';
import { FavouriteBooksComponent } from './querylist/favourite-books.component';
import { BookDirective } from './querylist/book.directive';
import { MessageDirectiveone } from './querylist/message.directive';
import { PersonComponent } from './contentchild/person.component';
import { BookDirectiveChild } from './contentchild/book.directive';
import { WriterComponentchild } from './contentchild/writer.component';
import { FavouriteBooksComponentchild } from './contentchild/favourite-books.component';
import { CityComponent } from './contentchild/city.component';
import { AddressQueryComponent } from './contentchild/address.component';
import { FriendComponent } from './contentchild/friend.component';
import { FavouriteFriendsQueryComponent } from './contentchild/favourite-friends.component';
import { FavouriteFriendsoneComponent } from './contentchild/favourite-cities.component';
import { AngularformValidationComponent } from './angularform-validation/angularform-validation.component';
import { TemplateDrivenFormComponent } from './angularform-validation/template-driven-form.component';
import { UserFormService } from './angularform-validation/user-service';
import { ReactiveFormComponent } from './angularform-validation/reactive-form.component';
import { ReactiveFormgroupComponent } from './angularform-validation/reactive-formgroup.component';
import { CustomeEventComponent } from './custome-event/custome-event.component';
import { CustomePersonComponent } from './custome-event/customeperson.component';
import { CustomeParentComponent } from './custome-event/customeparent.component';
import { RouterNavigationModule } from './routerandnavigation/routerandnavigation.module';
import { CountryModule } from './country/country.module';
import { TwowayComponent } from './twoway/twoway.component';
import { MsgComponent } from './twoway/msg.component';
import { AliasComponent } from './twoway/AliasComponent';
import { TextSizeComponent } from './twoway/textsize.component';
import { SelectBoxComponent } from './twoway/selectbox.component';
import { CaseComponent } from './twoway/case.component';
import { UpperCaseComponent } from './twoway/uppercase.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { NumberParentComponent } from './viewchild/number-parent.component';
import { NumberComponent } from './viewchild/number.component';
import { StopwatchComponent } from './viewchild/stopwatch.component';
import { StopwatchParentComponent } from './viewchild/stopwatch-parent.component';
import { CpColorDirective } from './viewchild/cpcolor.directive';
import { CpColorParentComponent } from './viewchild/cpcolor-parent.component';
import { CpThemeComponent } from './viewchild/cptheme.component';
import { CustomepipeComponent } from './customepipe/customepipe.component';
import { WelcomePipe } from './customepipe/welcome.pipe';
import { StrFormatPipe } from './customepipe/strformat.pipe';
import { DivisionPipe } from './customepipe/division.pipe';
import { RepeatPipe } from './customepipe/repeat.pipe';
import { MyJSONPipe } from './customepipe/myjson.pipe';
import { MyUppercaseOnePipe } from './customepipe/myuppercaseone.pipe';
import { MyUppercaseTwoPipe } from './customepipe/myuppercasetwo.pipe';
import { CompanyOnePipe } from './customepipe/companyone.pipe';
import { CompanyTwoPipe } from './customepipe/companytwo.pipe';
import { HostComponent } from './host/host.component';
import { PersonHostComponent } from './host/person.component';
import { CompanyHostComponent } from './host/company.component';
import { AddressHostComponent } from './host/address.component';
import { UrlSearchParamsComponent } from './url-search-params/url-search-params.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookData } from './url-search-params/book-data';

@NgModule({
      imports: [
            BrowserModule,
            AppRoutingModule,
            MypostBannerModule,
            FormsModule,
            ReactiveFormsModule,
            HttpModule,
            RouterNavigationModule,
            CountryModule,
            InMemoryWebApiModule.forRoot(BookData)
      ],
      declarations: [
            DashboardLayoutComponent,
            AddressComponent,
            LogoutComponent,
            AppComponent,
            EmployeeComponent,
            EmployeeChildComponent,
            TeamManagementComponent,
            ProviderComponent,
            CowComponent,
            LionComponent,
            AnyAnimalComponent,
            AnimalDetailsComponent,
            ComputerComponent,
            BookComponent,
            BookFactoryComponent,
            Provider2Component,
            AppendDemoComponent,
            CP2Directive,
            CP3Directive,
            CP4Directive,
            CP5Directive,
            CP6Directive,
            CP7Directive,
            CP8Directive,
            CP9Directive,
            CP10Directive,
            CP11Directive,
            LifecycleComponent,
            CP2Component,
            CPDirective,
            CP1Component,
            CounterComponent,
            TemplatesComponent,
            NgTemplateNgSwitchComponent,
            NgTemplateNgIfComponent,
            NgTemplateNgForComponent,
            CpMsgComponent,
            MessageDirective,
            CpIfDirective,
            CpIfDemoComponent,
            CrudOperationComponent,
            QuerylistComponent,
            ContentchildComponent,
            Cp1ComponentQuerylist,
            MessageDirectiveone,
            WriterComponent,
            Cp2ComponentQuerylist,
            FavouriteFriendsComponent,
            FavouriteBooksComponent,
            BookDirective,
            PersonComponent,
            BookDirectiveChild,
            WriterComponentchild,
            FavouriteBooksComponentchild,
            AddressQueryComponent,
            CityComponent,
            FavouriteFriendsoneComponent,
            FriendComponent,
            FavouriteFriendsQueryComponent,
            AngularformValidationComponent,
            TemplateDrivenFormComponent,
            ReactiveFormComponent,
            ReactiveFormgroupComponent,
            CustomeEventComponent,
            CustomeParentComponent,
            CustomePersonComponent,
            TwowayComponent,
            MsgComponent,
            AliasComponent,
            TextSizeComponent,
            SelectBoxComponent,
            CaseComponent,
            UpperCaseComponent,
            ViewchildComponent,
            NumberParentComponent,
            NumberComponent,
            StopwatchParentComponent,
            StopwatchComponent,
            CpColorParentComponent,
            CpColorDirective,
            CpThemeComponent,
            CustomepipeComponent,
            WelcomePipe,
            StrFormatPipe,
            DivisionPipe,
            RepeatPipe,
            MyJSONPipe,
            MyUppercaseOnePipe,
            MyUppercaseTwoPipe,
            CompanyOnePipe,
            CompanyTwoPipe,
            HostComponent,
            PersonHostComponent,
            CompanyHostComponent,
            AddressHostComponent,
            UrlSearchParamsComponent
      ],
      providers: [
            AuthService,
            AuthGuardService,
            TeamManagementService,
            LoggerService,
            UserFormService,
            CaseComponent
      ],
      bootstrap: [AppComponent]
})
export class AppModule { }
