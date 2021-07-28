import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { Park } from '../interface';
import { ActivatedRoute } from '@angular/router';

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
  constructor(public api: NpsApiService, private route: ActivatedRoute) {}

  queryParam: string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.stateCode = params['stateCode'];
      this.api.getParksByState(this.stateCode).subscribe((states: any) => {
        this.setFilteredStates(states.data);
        console.log(this.filteredByState);
      });
      this.api.getParks().subscribe((data) => {
        this.park = data.data;
      });
      console.log(this.park);
    });
  }
  setFilteredStates(stateArray: any[]) {
    this.filteredByState = stateArray;
  }
}
