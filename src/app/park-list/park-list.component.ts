import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { Park } from '../interface';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../favorite.service';


@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.css'],
})
export class ParkListComponent implements OnInit {
  parkCode: string = '';
  stateCode: string = '';
  park: any = { data: [] };
  filteredByState: any;
  constructor(public api: NpsApiService, private route: ActivatedRoute, public favorite: FavoriteService) {}

  queryParam: string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.stateCode = params['stateCode'];
      this.api.getParksByState(this.stateCode).subscribe((states: any) => {
        this.setFilteredStates(states.data);
        console.log(this.filteredByState);
      });
      this.api.getParks().subscribe((data) => {
        // this.park = data.data;
        this.park = data;
        let favoriteList = this.favorite.getFavorites();
        console.log(favoriteList);
        this.park.forEach((item:any) => {
          let favoritePark = favoriteList.find((fav) => fav.parkCode === item.parkCode);
          item.isFavorite = false;
          if (favoritePark) {
            item.isFavorite = true;
          }
        });
      });
      console.log(this.park);
    });
  }
  setFilteredStates(stateArray: any[]) {
    this.filteredByState = stateArray;
  }
}
