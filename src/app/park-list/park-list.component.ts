import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { Park } from '../interface';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../favorite.service';
import { faTree } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.css'],
})
export class ParkListComponent implements OnInit {
  parkCode: string = '';
  stateCode: string = '';
  park: Park[] = [];
  faTree = faTree;
  
  constructor(public api: NpsApiService, private route: ActivatedRoute, public favorite: FavoriteService) {}

  queryParam: string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.stateCode = params['stateCode'];
      this.api.getParks(this.stateCode).subscribe((data) => {
        this.park = data.data;
        this.park.forEach((item: Park) => {
          item.isFavorite = this.favorite.isFavorited(item);
          // line 33 Setting item that is favorited to what it returns
          })
      })
        });
  }
 
  toggleFavorite(park: Park) {
    this.favorite.toggleFavorite(park);
    }
}
