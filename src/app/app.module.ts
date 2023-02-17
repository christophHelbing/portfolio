import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import { HeaderComponent } from './components/header/header.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import { CareerComponent } from './components/career/career.component';
import {DatePipe} from "@angular/common";
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    AboutComponent,
    CareerComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxTypedJsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
