import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmsComponent} from './films/films.component';

const routes: Routes = [
  {path: '', redirectTo: '/films', pathMatch: 'full'},
  {path: 'films', component: FilmsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
