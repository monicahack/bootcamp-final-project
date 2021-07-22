import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { Park, Activities, Webcams } from '../interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-park-detail-page',
  templateUrl: './park-detail-page.component.html',
  styleUrls: ['./park-detail-page.component.css']
})
export class ParkDetailPageComponent implements OnInit {
  parkCode: string = '';
  park: any = {};
  data: Park[] = [];
  constructor(public api:NpsApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.parkCode = params['parkCode'];
    this.api.getParkDetails(this.parkCode).subscribe((data) => {
      this.park = data;
      console.log(this.park.data);
    });
  });
  }
}