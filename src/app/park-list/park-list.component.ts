import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import{ Park } from '../interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.css']
})
export class ParkListComponent implements OnInit {
  parkCode: string = '';
  stateCode: string = '';
  park: any = {data:[]};
  constructor(public api:NpsApiService, private route:ActivatedRoute) { }

  queryParam: string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.stateCode = params['stateCode'];
      console.log(params.stateCode);
      console.log(this.stateCode);
      // return this.api.getParkList();
    //   this.api.getParks().subscribe((data) => {
    //   this.park = data;
    //   console.log(this.park.data);
    // });
    });

// this.route.params.subscribe((params)=>{
    //   this.stateCode = params['stateCode'];
    //   console.log(params);
    //   // this.stateCode = params.stateCode;
    //   console.log(this.stateCode);
    // })
    //this needs to communicate with the NPS API service
    this.route.params.subscribe((params) => {
      this.stateCode = params['stateCode'];
    this.api.getParks().subscribe((data) => {
      this.park = data;
      console.log(this.park.data);
    });
  });
}}

