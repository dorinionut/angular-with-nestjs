import { NgModule } from '@angular/core';

import { MarvelService } from './services/marvel.service';
import { MarvelCharacterListComponent } from './views/character-list/character-list.component';
import { MarvelCharacterDetailsComponent } from './views/character-detail/character-detail.component';
import { MarvelRoutingModule } from './marvel-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MarvelRoutingModule
  ],
  declarations: [
    MarvelCharacterListComponent,
    MarvelCharacterDetailsComponent
  ],
  providers: [
    MarvelService
  ]
})
export class MarvelModule { }
