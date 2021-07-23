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
  park: any = {data:[]};
  constructor(public api:NpsApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getParks().subscribe((data) => {
      this.park = data;
      console.log(this.park.data);
    });
  }}
