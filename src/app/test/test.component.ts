import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { ParkResponse, Park, Activities } from '../interface';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data: Park[] = [];
  constructor(public api:NpsApiService) { }

  ngOnInit(): void {
    this.api.getParks().subscribe((data) => {
      this.data  = data.data;
      console.log(this.data);
  });
  
  }
}
