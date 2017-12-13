import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderComponent } from './provider.component';
import { CowComponent } from './cow.component';
import { LionComponent } from './lion.component';
import { AnyAnimalComponent } from './any-animal.component';
import { AnimalDetailsComponent } from './animal-details.component';
import { LionService } from './services/lion.service';
import { CowService } from './services/cow.service';
import { AnimalService } from './services/animal.service';
import { BrowserModule } from '@angular/platform-browser';
alert('i am maruthu pandi');

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AnimalDetailsComponent,
    AnyAnimalComponent,
    LionComponent,
    CowComponent,
    ProviderComponent
  ],
  providers: [
    AnimalService,
    CowService,
    LionService
  ]
})
export class ProvideModule { }
