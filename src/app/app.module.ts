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
  MatAccordion, MatSidenavModule, MatListModule
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EpisodesComponent } from './views/episodes/episodes.component';
import { ShowsPageComponent } from './views/shows-page/shows-page.component';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { NotfoundComponent } from './views/notfound/notfound.component';
import {HttpClientModule} from '@angular/common/http';

import { LayoutModule } from '@angular/cdk/layout';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShowsComponent,
    EpisodesComponent,
    ShowsPageComponent,
    NotfoundComponent


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
    HttpClientModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
