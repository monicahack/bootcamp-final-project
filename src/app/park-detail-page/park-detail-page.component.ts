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

  constructor(public api:NpsApiService, private route:ActivatedRoute, public favorite: FavoriteService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.parkCode = params['parkCode'];
    this.api.getParkDetails(this.parkCode).subscribe((data) => {
      this.park = data;
      this.park.forEach((item: Park) => {
        item.isFavorite = this.favorite.isFavorited(item);
      })
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