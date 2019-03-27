import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowsComponent } from './views/shows/shows.component';
import {EpisodesComponent} from './views/episodes/episodes.component';
import {HomeComponent} from './views/home/home.component';
import {NotfoundComponent} from './views/notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'shows/:query', component: ShowsComponent},
  {path: 'shows/details/:id', component: EpisodesComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
