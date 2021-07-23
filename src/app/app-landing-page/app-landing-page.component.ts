import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-app-landing-page',
  templateUrl: './app-landing-page.component.html',
  styleUrls: ['./app-landing-page.component.css']
})
export class AppLandingPageComponent implements OnInit {

  constructor(public api: NpsApiService, public tree: FavoriteService) { }

  ngOnInit(): void {
  }

}
