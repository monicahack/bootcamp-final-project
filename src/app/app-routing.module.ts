import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLandingPageComponent } from './app-landing-page/app-landing-page.component';
import { ParkDetailPageComponent } from './park-detail-page/park-detail-page.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'park-detail/:parkCode', component: ParkDetailPageComponent}, 
  {path: '', component: AppLandingPageComponent, pathMatch:'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
