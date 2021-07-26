import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-park-detail-page',
  templateUrl: './park-detail-page.component.html',
  styleUrls: ['./park-detail-page.component.css']
})
export class ParkDetailPageComponent implements OnInit {
  parkCode: string = '';
  park: any = {data:[]};
  webcam: any = {data:[]};
  url:string = '';
  constructor(public api:NpsApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.parkCode = params['parkCode'];
    this.api.getParkDetails(this.parkCode).subscribe((data) => {
      this.park = data;
      console.log(this.park.data);
    });
});

  this.route.params.subscribe((params) => {
    this.parkCode = params['parkCode'];
  this.api.getWebcam(this.parkCode).subscribe((data) => {
    this.webcam = data;
    console.log(this.webcam.data);
  });
});

  }
}