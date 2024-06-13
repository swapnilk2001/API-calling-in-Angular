import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponentComponent } from './news-component/news-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiComponentComponent } from './component/api-component/api-component.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorComComponent } from './error-com/error-com.component';
import { CommemtCoComponent } from './commemt-co/commemt-co.component';
import { PhotoComComponent } from './component/photo-com/photo-com.component';

@NgModule({
  declarations: [AppComponent, NewsComponentComponent, ApiComponentComponent, ErrorComComponent, CommemtCoComponent, PhotoComComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private rout: Router) {}

  GetApi() {
    this.rout.navigate(['/post']);
  }
}
