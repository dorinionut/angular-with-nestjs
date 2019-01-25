import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../../services/google.service';

@Component({
  selector: 'app-web-view',
  templateUrl: './web-view.component.html',
  styleUrls: ['./web-view.component.less']
})
export class WebViewComponent implements OnInit {

  public outputHTML: string;

  constructor(
    private googleService: GoogleService
  ) { }

  ngOnInit() {
    this.googleService
      .get()
      .subscribe(result => this.outputHTML = result);
  }

}
