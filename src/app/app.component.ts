import { Component, OnInit } from '@angular/core';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { Park } from './interface';
import { NpsApiService } from './nps-api.service';
import { states } from './states-list/states-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Go Park Yourself';
  faTree = faTree;
  parkCode: string = '';
  stateCode: string = '';
  stateName?: string = '';
  park: Park[] = [];
  isSearched: boolean = false;

  constructor(
    public api: NpsApiService,
    private route: Router,

    ) {}

  queryParam: string = '';

/*   ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.parkCode = params['parkCode'];
      this.api.getParks(this.stateCode).subscribe((data) => {
        this.park = data.data;
        /* this.park.forEach((item: Park) => {
       item.isFavorite = this.favorite.isFavorited(item); 
    }) 
      });
    });
  } */
  keywordSearch(search: any) {
    this.route.navigate(['park-list'], { queryParams: { search: search } });
    console.log(search);
  }
}
