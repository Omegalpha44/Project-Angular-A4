import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CardpageComponent} from './cardpage/cardpage.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'cardpage', component: CardpageComponent},
  // other routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }