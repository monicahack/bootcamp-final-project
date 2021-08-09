import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLandingPageComponent } from './app-landing-page/app-landing-page.component';
import { ParkDetailPageComponent } from './park-detail-page/park-detail-page.component';
import { StatesListComponent } from './states-list/states-list.component';
import { ParkListComponent } from './park-list/park-list.component';
import { RandomParkGeneratorComponent } from './random-park-generator/random-park-generator.component';
import { MyTripListComponent } from './my-trip-list/my-trip-list.component';

const routes: Routes = [
  {path: 'park-detail/:parkCode', component: ParkDetailPageComponent},
  {path: 'states-list', component: StatesListComponent},
  {path: 'park-list', component: ParkListComponent},
  {path: 'random-park-generator', component: RandomParkGeneratorComponent},
  {path: 'my-trip-list', component: MyTripListComponent},

  {path: '', component: AppLandingPageComponent, pathMatch:'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//this is added when we say "yes for routing"