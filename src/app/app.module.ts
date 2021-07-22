import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SearchComponent } from './search/search.component';
import { MyTripListComponent } from './my-trip-list/my-trip-list.component';
import { StatesListComponent } from './states-list/states-list.component';
import { SeasonSelectorComponent } from './season-selector/season-selector.component';
import { RandomParkGeneratorComponent } from './random-park-generator/random-park-generator.component';
import { ParkListComponent } from './park-list/park-list.component';
import { AppLandingPageComponent } from './app-landing-page/app-landing-page.component';
import { ParkDetailPageComponent } from './park-detail-page/park-detail-page.component';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SearchComponent,
    MyTripListComponent,
    StatesListComponent,
    SeasonSelectorComponent,
    RandomParkGeneratorComponent,
    ParkListComponent,
    AppLandingPageComponent,
    ParkDetailPageComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
