import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { Park } from '../interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-my-trip-list',
  templateUrl: './my-trip-list.component.html',
  styleUrls: ['./my-trip-list.component.css']
})
export class MyTripListComponent implements OnInit {
  favoriteList: Park[] = [];
  faTree = faTree;
  title = 'My Trip List | Go Park Yourself';

  constructor(
    public favorite: FavoriteService, 
    private titleService: Title
  ) { }

  ngOnInit(): void {
    //sets page title
    this.titleService.setTitle(this.title);
    //gets favorites from array to display
    this.favoriteList=this.favorite.getFavorites();
    console.log(this.favoriteList);
}

toggleFavorite(park: Park) {
  this.favorite.toggleFavorite(park);
  }
}