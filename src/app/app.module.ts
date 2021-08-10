import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MyTripListComponent } from './my-trip-list/my-trip-list.component';
import { StatesListComponent } from './states-list/states-list.component';
import { RandomParkGeneratorComponent } from './random-park-generator/random-park-generator.component';
import { ParkListComponent } from './park-list/park-list.component';
import { AppLandingPageComponent } from './app-landing-page/app-landing-page.component';
import { ParkDetailPageComponent } from './park-detail-page/park-detail-page.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MyTripListComponent,
    StatesListComponent,
    RandomParkGeneratorComponent,
    ParkListComponent,
    AppLandingPageComponent,
    ParkDetailPageComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//this file was created automatically-components, services- and we added in Font Awesome and HttpClientModule
