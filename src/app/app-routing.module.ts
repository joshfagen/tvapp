import { NgModule } from '@angular/core';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { ShowsComponent } from './views/shows/shows.component';
import {EpisodesComponent} from './views/episodes/episodes.component';

const routes: Routes = [
  {path: 'show/:id', component: EpisodesComponent},
  {path: 'search/:query', component: ShowsComponent},
  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
