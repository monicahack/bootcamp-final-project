import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Park } from './interface';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  parkCode: string = '';
  isFavorite!: boolean;
  favoriteList: Park[] = [];

  constructor(public client: HttpClient) { }

toggleFavorite(park: Park) {
  let favoritePark = this.favoriteList.find((item) => park.parkCode === item.parkCode);
  // console.log(favoritePark);
  if (favoritePark) {
    park.isFavorite = false;
    let index = this.favoriteList.findIndex((item) => park.parkCode === item.parkCode);
    console.log(index);
    this.favoriteList.splice(index, 1);
  } else {
    park.isFavorite = true;
    this.favoriteList.push(park);
  }
  console.log(this.favoriteList);
}

getFavorites() {
  return this.favoriteList;
}

onClick() {
  this.isFavorite = !this.isFavorite;
  console.log('Is favorite value: ' + this.isFavorite);
  }
}
