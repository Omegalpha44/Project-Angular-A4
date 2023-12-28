import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardpageComponent } from './cardpage/cardpage.component';
import { FondateurComponent } from "./fondateur/fondateur.component";
import {MescoursComponent} from "./mescours/mescours.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cardpage', component: CardpageComponent },
  { path: 'fondateurs', component: FondateurComponent},
  {path: 'mescours', component:MescoursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
