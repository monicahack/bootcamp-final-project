import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../favorite.service';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { Park } from '../interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-park-detail-page',
  templateUrl: './park-detail-page.component.html',
  styleUrls: ['./park-detail-page.component.css']
})
export class ParkDetailPageComponent implements OnInit {
  parkCode: string = '';
  park: any = {data:[]};   //accessing at data level of api thru Park interface
  webcam: any = {data:[]}; 
  url:string = '';
  faTree = faTree;
  title = 'Park Detail | Go Park Yourself';

  constructor(
    public api:NpsApiService, 
    private route:ActivatedRoute, 
    public favorite: FavoriteService, 
    private titleService: Title
  ) { }

  ngOnInit(): void {
    //sets page title
    this.titleService.setTitle(this.title);
    //park api with park code param
    this.route.params.subscribe((params) => {
      this.parkCode = params['parkCode'];
    this.api.getParkDetails(this.parkCode).subscribe((data) => {
      this.park = data;
      console.log(this.park.data);
    //webcam api
    this.api.getWebcam(this.parkCode).subscribe((data) => {
      this.webcam = data;
      console.log(this.webcam.data);
    });  
    //loops thru to check for if favorites
    this.park.forEach((item: Park) => {
      item.isFavorite = this.favorite.isFavorited(item);
    })
      console.log(this.park.data);
    });
  });
}

toggleFavorite(park: Park) {
  this.favorite.toggleFavorite(park);
  }
}