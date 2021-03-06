import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NpsApiService } from '../nps-api.service';
import { Park } from '../interface';
import { FavoriteService } from '../favorite.service';
import { faTree, faCompass } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-random-park-generator',
  templateUrl: './random-park-generator.component.html',
  styleUrls: ['./random-park-generator.component.css'],
})
export class RandomParkGeneratorComponent implements OnInit {
  title = 'Random Park | Go Park Yourself';
  parkCode: string = '';
  park: any = {data:[]};
  data: Park[] = [];
  randomNumber = Math.floor((Math.random() * 467) + 1);
  faTree = faTree;
  faCompass = faCompass;

  spinnerDisplay={
    "display": false,
    "show": true
  }
  

  constructor(public api:NpsApiService, private route:ActivatedRoute, public favorite: FavoriteService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
      // .subscribes allow for use of response data from the API
      // Line 35 makes the data available from NPS API
      this.api.getParks().subscribe((data)=>{
        this.park = data;
        Array.from(this.park).forEach((item: any) => {
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



