import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// for network
import {HttpClientModule } from '@angular/common/http';
import {NewsService} from './news.service';

// for material
import { MatButtonModule, MatMenuModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatMenuModule, MatCardModule, MatToolbarModule,
    MatIconModule, MatSidenavModule, MatListModule,
    HttpClientModule
  ],
  providers: [ HttpClientModule, NewsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
