import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NpsApiService } from '../nps-api.service';
import { Park } from '../interface';
import { FavoriteService } from '../favorite.service';
import { faTree } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-random-park-generator',
  templateUrl: './random-park-generator.component.html',
  styleUrls: ['./random-park-generator.component.css']
})
export class RandomParkGeneratorComponent implements OnInit {

  parkCode: string = '';
  park: any = {data:[]};
  data: Park[] = [];
  randomNumber = Math.floor((Math.random() * 467) + 1);
  faTree = faTree;
  favoriteList: Park[] = [];

  constructor(public api:NpsApiService, private route:ActivatedRoute, public favorite: FavoriteService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.parkCode = params['randomNumber'];
      this.api.getParks().subscribe((data)=>{
        this.park = data;
        console.log(this.park.data[this.randomNumber].fullName);
        let favoriteList = this.favorite.getFavorites();
      let favoritePark = favoriteList.find((item => item.parkCode === this.park.parkCode));
      if (favoritePark) {
        this.park.isFavorite = true;
      }
        
      })
    })
  }

  toggleFavorite(park: Park) {
    this.favorite.toggleFavorite(park);
    }
  }



