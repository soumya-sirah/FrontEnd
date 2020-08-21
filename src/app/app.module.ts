import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './master/footer/footer.component';
import { NavbarComponent } from './master/navbar/navbar.component';
import { SidebarComponent } from './master/sidebar/sidebar.component';
import { HeaderContentComponent } from './master/header-content/header-content.component';
import { ContentComponent } from './master/content/content.component';
import { TestComponent } from './master/test/test.component';
import { LoginComponent } from './master/login/login.component';
import { MasterComponent } from './master/master/master.component';

import { GestionOrientationComponent } from './bd/compenents/Orientation/gestion-orientation/gestion-orientation.component';
import {FormsModule} from "@angular/forms";
import { ListOrientationComponent } from './bd/compenents/Orientation/list-orientation/list-orientation.component';

import {HttpClientModule} from "@angular/common/http";
import {OrientationService} from "./bd/services/orientation.service";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderContentComponent,
    ContentComponent,
    TestComponent,
    LoginComponent,
    MasterComponent,
    GestionOrientationComponent,
    ListOrientationComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
    ],
  providers: [
    OrientationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
