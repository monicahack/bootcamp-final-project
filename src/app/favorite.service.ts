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
  if (favoritePark) {
    park.isFavorite = false;
    let index = this.favoriteList.findIndex((item) => park.parkCode === item.parkCode);
    console.log(index);
    //adds favorite to array
    this.favoriteList.splice(index, 1);
  } else {
    //if is favorite, pushes to park array
    park.isFavorite = true;
    this.favoriteList.push(park);
  }
  console.log(this.favoriteList);
}

getFavorites() {
  return this.favoriteList;
}
isFavorited(park: Park){
  let favorite = this.favoriteList.find((fav) => fav.parkCode === park.parkCode);
  //!! is returning a boolean representation if it is found. if found is an object. opposite of object is false. essentially returning if found
  //isFavorited returns true or false. 
  return !!favorite;
}

onClick() {
  //removes favorite from array
  this.isFavorite = !this.isFavorite;
  console.log('Is favorite value: ' + this.isFavorite);
  }
}