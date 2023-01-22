import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import { HeaderComponent } from './components/header/header.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxTypedJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
