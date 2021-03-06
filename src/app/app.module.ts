import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ActionComponent } from './action/action.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import {RouterModule,Routes,Router} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    ActionComponent,
    MainComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
  
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
AppRoutingModule  ],
 
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {

  constructor(router: Router) {
  }
 }
