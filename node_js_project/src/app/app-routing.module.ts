import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CardpageComponent} from './cardpage/cardpage.component';
import {FondateurComponent} from './fondateur/fondateur.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'cardpage', component: CardpageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'fondateur', component: FondateurComponent}
  // other routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }