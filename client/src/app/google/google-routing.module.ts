import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebViewComponent } from './views/web-view/web-view.component';

const routes: Routes = [{
  path: '',
  component: WebViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleRoutingModule { }
