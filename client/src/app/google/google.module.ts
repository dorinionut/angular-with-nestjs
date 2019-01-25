import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleRoutingModule } from './google-routing.module';
import { WebViewComponent } from './views/web-view/web-view.component';
import { GoogleService } from './services/google.service';
import { SanitizeHtmlPipe } from '../pipes/sanitize-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    GoogleRoutingModule
  ],
  declarations: [
    WebViewComponent,
    SanitizeHtmlPipe
  ],
  providers: [GoogleService]
})
export class GoogleModule { }
