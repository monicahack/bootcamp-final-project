import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { Park } from '../interface';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit {
  park: any = {data:[]};

  constructor(public favorite: FavoriteService) { }

  ngOnInit(): void {
  }

  toggleFavorite(park: Park){
    this.favorite.toggleFavorite(park);
  }
}
