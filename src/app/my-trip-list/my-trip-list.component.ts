import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../favorite.service';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { Park } from '../interface';

@Component({
  selector: 'app-my-trip-list',
  templateUrl: './my-trip-list.component.html',
  styleUrls: ['./my-trip-list.component.css']
})
export class MyTripListComponent implements OnInit {
  park: Park [] = [];
  favoriteList: Park[] = [];
  faTree = faTree;
  constructor(public api:NpsApiService, private route:ActivatedRoute, public favorite: FavoriteService) { }

  ngOnInit(): void {
    this.favoriteList=this.favorite.getFavorites();
}

toggleFavorite(park: Park) {
  this.favorite.toggleFavorite(park);
  }
}