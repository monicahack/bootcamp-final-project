import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLandingPageComponent } from './app-landing-page/app-landing-page.component';
import { ParkDetailPageComponent } from './park-detail-page/park-detail-page.component';
import { StatesListComponent } from './states-list/states-list.component';
import { ParkListComponent } from './park-list/park-list.component';
import { SeasonSelectorComponent } from './season-selector/season-selector.component';
import { RandomParkGeneratorComponent } from './random-park-generator/random-park-generator.component';
import { MyTripListComponent } from './my-trip-list/my-trip-list.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'park-detail/:parkCode', component: ParkDetailPageComponent},
  {path: 'states-list', component: StatesListComponent},
  {path: 'park-list', component: ParkListComponent},
  {path: 'season-selector', component: SeasonSelectorComponent},
  {path: 'random-park-generator', component: RandomParkGeneratorComponent},
  {path: 'my-trip-list', component: MyTripListComponent},

  {path: '', component: AppLandingPageComponent, pathMatch:'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
