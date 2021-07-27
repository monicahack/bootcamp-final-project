import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { ActivatedRoute } from '@angular/router';
import{ ThingsToDo } from '../interface';

interface SeasonsListing {
  seasonType: string;
}

@Component({
  selector: 'app-season-selector',
  templateUrl: './season-selector.component.html',
  styleUrls: ['./season-selector.component.css']
})
export class SeasonSelectorComponent implements OnInit {
  seasons: SeasonsListing[] = [
    {
      seasonType: "Spring"
    },
    {
      seasonType: "Summer"
    },
    {
      seasonType: "Winter"
    },
    {
      seasonType: "Fall"
    }
  ];

  season: string[] = [];

  constructor(public api:NpsApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
