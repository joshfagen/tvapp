import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { ShowsComponent } from './views/shows/shows.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EpisodesComponent } from './views/episodes/episodes.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { VisitedComponent } from './views/visited/visited.component';
import { SearchresultComponent } from './views/searchresult/searchresult.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShowsComponent,
    EpisodesComponent,
    CalendarComponent,
    VisitedComponent,
    SearchresultComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
