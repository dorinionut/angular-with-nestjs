import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'marvel',
    loadChildren: './marvel/marvel.module#MarvelModule'
  },
  {
    path: 'google',
    loadChildren: './google/google.module#GoogleModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
