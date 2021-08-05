import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { Park } from '../interface';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../favorite.service';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { states } from '../states-list/states-list.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.css'],
})
export class ParkListComponent implements OnInit {
  parkCode: string = '';
  stateCode: string = '';
  stateName?: string = '';
  park: Park[] = [];
  faTree = faTree;
  isSearched: boolean = false;
  title = 'Park List | Go Park Yourself';
  
  constructor(public api: NpsApiService, private route: ActivatedRoute, public favorite: FavoriteService, private titleService: Title) {}

  queryParam: string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.stateCode = params['stateCode'];
      this.titleService.setTitle(this.title);
      let search = params.search;
      // lines 38-43 are how we got the heading on results to display 'parks in statename'
      // this is linked to the custom created states array and matching 
      // the state code with the state code in the URL and then 
      // outputting the state name from the custom array
      const selectedState = states.find(
        (state: any) => state.stateCode === this.stateCode
      );
      if (selectedState) {
        this.stateName = selectedState.stateName;
      }
      // lines 38-43 are how we got the heading on results to display 'parks in statename'
      if (search) {
        this.keywordSearch(search);
      } else {
        this.api.getParks(this.stateCode).subscribe((data) => {
          this.park = data.data;
          this.park.forEach((item: Park) => {
            item.isFavorite = this.favorite.isFavorited(item);
            // line 33 Setting item that is favorited to what it returns
          });
        });
      }
    });
  }

  toggleFavorite(park: Park) {
    this.favorite.toggleFavorite(park);
  }

  keywordSearch(search: string) {
    this.api
      .searchParks({
        fullName: search,
      })
      .subscribe((data) => {
        if (data) {
          this.park = data.data;
          console.log(this.park);
          this.isSearched = true;
        } else {
          this.park = [];
        }
      });
  }
}
