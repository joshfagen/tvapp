import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  (path: '**', component: NotFoundComponent),
  (path: 'show/:id', component: ShowComponent),
  (path: 'search/:query', component: ShowsComponent)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
