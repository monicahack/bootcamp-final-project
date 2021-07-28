import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { Park } from '../interface';

@Component({
  selector: 'app-my-trip-list',
  templateUrl: './my-trip-list.component.html',
  styleUrls: ['./my-trip-list.component.css']
})
export class MyTripListComponent implements OnInit {
  park: any = {data:[]};
  favoriteList: Park[] = [];
  faTree = faTree;

  constructor(public favorite: FavoriteService) { }

  ngOnInit(): void {
    this.favoriteList=this.favorite.getFavorites();
    console.log(this.favorite.favoriteList);
}

toggleFavorite(park: Park) {
  this.favorite.toggleFavorite(park);
  }
}