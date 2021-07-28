import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../favorite.service';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { Park } from '../interface';

@Component({
  selector: 'app-park-detail-page',
  templateUrl: './park-detail-page.component.html',
  styleUrls: ['./park-detail-page.component.css']
})
export class ParkDetailPageComponent implements OnInit {
  parkCode: string = '';
  park: any = {data:[]};
  webcam: any = {data:[]}; 
  url:string = '';
  faTree = faTree;
  favoriteList: Park[] = [];

  constructor(public api:NpsApiService, private route:ActivatedRoute, public favorite: FavoriteService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.parkCode = params['parkCode'];
    this.api.getParkDetails(this.parkCode).subscribe((data) => {
      this.park = data;
      let favoriteList = this.favorite.getFavorites();
      let favoritePark = favoriteList.find((item => item.parkCode === this.park.parkCode));
      if (favoritePark) {
        this.park.isFavorite = true;
      }
      console.log(this.park.data);
    });
});

  this.route.params.subscribe((params) => {
    this.parkCode = params['parkCode'];
  this.api.getWebcam(this.parkCode).subscribe((data) => {
    this.webcam = data;
    console.log(this.webcam.data);
    });
  });
}

toggleFavorite(park: Park) {
  this.favorite.toggleFavorite(park);
  }
}