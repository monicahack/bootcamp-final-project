import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { ParkResponse, Data, Activities } from '../interface';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data: Data[] = [];
  constructor(public api:NpsApiService) { }

  ngOnInit(): void {
    this.api.getParks().subscribe((data) => {
      this.data  = data.data.fullName;
  });
  
  }
}
