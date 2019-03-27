import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { ShowsComponent } from './views/shows/shows.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatExpansionModule,
  MatAccordion
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EpisodesComponent } from './views/episodes/episodes.component';
import { VisitedComponent } from './views/visited/visited.component';
import { SearchresultComponent } from './views/searchresult/searchresult.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { ShowsPageComponent } from './views/shows-page/shows-page.component';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { NotfoundComponent } from './views/notfound/notfound.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShowsComponent,
    EpisodesComponent,
    VisitedComponent,
    SearchresultComponent,
    ScheduleComponent,
    ShowsPageComponent,
    NotfoundComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
