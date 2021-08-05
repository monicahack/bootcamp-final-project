import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { FavoriteService } from '../favorite.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-app-landing-page',
  templateUrl: './app-landing-page.component.html',
  styleUrls: ['./app-landing-page.component.css']
})
export class AppLandingPageComponent implements OnInit {
  title = 'Home | Go Park Yourself';

  constructor(public api: NpsApiService, public tree: FavoriteService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
