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

  spinnerDisplay={
    "display": false,
    "show": true
  }
  

  constructor(public api:NpsApiService, private route:ActivatedRoute, public favorite: FavoriteService) { }

  ngOnInit(): void {
      // Line 32 makes the data available from NPS API
      this.api.getParks().subscribe((data)=>{
        this.park = data;
        this.park.forEach((item: Park) => {
          item.isFavorite = this.favorite.isFavorited(item);
        })
      }) 
  }

  toggleFavorite(park: Park) {
    this.favorite.toggleFavorite(park);
    }

    // spinnerFunction(){
    //   this.spinnerDisplay.display = !this.spinnerDisplay.display
    //   this.spinnerDisplay.show = !this.spinnerDisplay.show
    //   setTimeout((spinnerFunction)=>{
    //     spinnerFunction();
    // }, 3000);
    // }

    



  }



