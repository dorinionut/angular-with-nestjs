import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { MarvelCharacterListComponent } from './views/character-list/character-list.component';
import { MarvelCharacterDetailsComponent } from './views/character-detail/character-detail.component';

const Routes = [
    {
        path: '',
        component: MarvelCharacterListComponent,
        children: [
          {
            path: ':id',
            component: MarvelCharacterDetailsComponent
          }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(Routes)],
    exports: [RouterModule]
})
export class MarvelRoutingModule {
    
}