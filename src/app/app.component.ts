import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'news-api';

  constructor(private rout: Router) {}

  GetApi() {
    this.rout.navigate(['/post']);
  }

  NewsApi() {
    this.rout.navigate(['/news']);
  }

  Com() {
    this.rout.navigate(['/error']);
  }
  Commet() {
    this.rout.navigate(['/comment']);
  }
  Photo() {
    this.rout.navigate(['/photo']);
  }
}
