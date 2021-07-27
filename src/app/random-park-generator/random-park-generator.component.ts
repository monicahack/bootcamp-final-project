import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NpsApiService } from '../nps-api.service';
import { Park } from '../interface';


@Component({
  selector: 'app-random-park-generator',
  templateUrl: './random-park-generator.component.html',
  styleUrls: ['./random-park-generator.component.css']
})
export class RandomParkGeneratorComponent implements OnInit {
  parkCode: string = '';
  park: any = {};
  data: Park[] = [];
  randomNumber = Math.floor((Math.random() * 467) + 1);

  constructor(public api:NpsApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.parkCode = params['parkCode'];
      this.api.getParkDetails(this.parkCode).subscribe((data)=>{
        this.park = data;
        console.log(this.park.data * this.randomNumber);
      })
    })
  

    
    
  }
  

}
  // this.route.params.subscribe(params) => {
    //   this.parkCode = params['parkCode'];
    // }
    // this.route.params.subscribe((params) => {
    //   console.log(this.park[this.randomNumber].parkCode);
      // this.parkCode = params['parkCode'];
      // this.api.getParkDetails(this.parkCode).subscribe((data) => {
      // this.park = data;
      // console.log(this.park.data);
      // });
    // });