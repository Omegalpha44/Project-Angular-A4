import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardpageComponent } from './cardpage/cardpage.component';
import { FondateurComponent } from './fondateur/fondateur.component';
import { MescoursComponent } from './mescours/mescours.component';
import {AgGridModule} from "ag-grid-angular";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardpageComponent,
    FondateurComponent,
    MescoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent, CardpageComponent, FondateurComponent, MescoursComponent]
})
export class AppModule { }
