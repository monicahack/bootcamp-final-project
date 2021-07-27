import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { Park } from '../interface';
import { ActivatedRoute } from '@angular/router';


export interface StateListing {
  stateName: string;
  stateCode: string;
}

@Component({
  selector: 'app-states-list',
  templateUrl: './states-list.component.html',
  styleUrls: ['./states-list.component.css']
})
export class StatesListComponent implements OnInit {
  states: StateListing[] = [
    {
      stateName: "Alabama",
      stateCode: "AL"
    },
    {
      stateName: "Alaska",
      stateCode: "AK"
    },
    {
      stateName: "Arizona",
      stateCode: "AZ"
    },
    {
      stateName: "Arkansas",
      stateCode: "AR"
    },
    {
      stateName: "California",
      stateCode: "CA"
    },
    {
      stateName: "Colorado",
      stateCode: "CO"
    },
    {
      stateName: "Connecticut",
      stateCode: "CT"
    },
    {
      stateName: "Delaware",
      stateCode: "DE"
    },
    {
      stateName: "District of Columbia",
      stateCode: "DC"
    },
    {
      stateName: "Florida",
      stateCode: "FL"
    },
    {
      stateName: "Georgia",
      stateCode: "GA"
    },
    {
      stateName: "Hawaii",
      stateCode: "HI"
    },
    {
      stateName: "Idaho",
      stateCode: "ID"
    },
    {
      stateName: "Illinois",
      stateCode: "IL"
    },
    {
      stateName: "Indiana",
      stateCode: "IN"
    },
    {
      stateName: "Iowa",
      stateCode: "IA"
    },
    {
      stateName: "Kansas",
      stateCode: "KS"
    },
    {
      stateName: "Kentucky",
      stateCode: "KY"
    },
    {
      stateName: "Louisiana",
      stateCode: "LA"
    },
    {
      stateName: "Maine",
      stateCode: "ME"
    },
    {
      stateName: "Maryland",
      stateCode: "MD"
    },
    {
      stateName: "Massachusetts",
      stateCode: "MA"
    },
    {
      stateName: "Michigan",
      stateCode: "MI"
    },
    {
      stateName: "Minnesota",
      stateCode: "MN"
    },
    {
      stateName: "Mississippi",
      stateCode: "MS"
    },
    {
      stateName: "Missouri",
      stateCode: "MO"
    },
    {
      stateName: "Montana",
      stateCode: "MT"
    },
    {
      stateName: "Nebraska",
      stateCode: "NE"
    },
    {
      stateName: "Nevada",
      stateCode: "NV"
    },
    {
      stateName: "New Hampshire",
      stateCode: "NH"
    },
    {
      stateName: "New Jersey",
      stateCode: "NJ"
    },
    {
      stateName: "New Mexico",
      stateCode: "NM"
    },
    {
      stateName: "New York",
      stateCode: "NY"
    },
    {
      stateName: "North Carolina",
      stateCode: "NC"
    },
    {
      stateName: "North Dakota",
      stateCode: "ND"
    },
    {
      stateName: "Ohio",
      stateCode: "OH"
    },
    {
      stateName: "Oklahoma",
      stateCode: "OK"
    },
    {
      stateName: "Oregon",
      stateCode: "OR"
    },
    {
      stateName: "Puerto Rico",
      stateCode: "PR"
    },
    {
      stateName: "Rhode Island",
      stateCode: "RI"
    },
    {
      stateName: "South Carolina",
      stateCode: "SC"
    },
    {
      stateName: "South Dakota",
      stateCode: "SD"
    },
    {
      stateName: "Tennessee",
      stateCode: "TN"
    },
    {
      stateName: "Texas",
      stateCode: "TX"
    },
    {
      stateName: "Utah",
      stateCode: "UT"
    },
    {
      stateName: "Vermont",
      stateCode: "VT"
    },
    {
      stateName: "Virginia",
      stateCode: "VA"
    },
    {
      stateName: "Virgin Islands",
      stateCode: "VI"
    },
    {
      stateName: "Washington",
      stateCode: "WA"
    },
    {
      stateName: "West Virginia",
      stateCode: "WV"
    },
    {
      stateName: "Wisconsin",
      stateCode: "WI"
    },
    {
      stateName: "Wyoming",
      stateCode: "WY"
    }
  ];

  // stateName: string;
  state: StateListing[] = [];
  // stateCode: any = {stateCode};
  index = 0 + this.states.length;
  park: any = {};
  data: Park[] = [];
  constructor(public api:NpsApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  //   this.route.params.subscribe((params) => {
  //   this.states = params['states'];
  //   this.api.getParks().subscribe((data) => {
  //     this.park = data;
  //     console.log(this.park);
  //   });
  // });
  }

  getStateCode(index: number) {
    // console.log('button works')
    console.log(this.states[index].stateCode);
    // console.log(getParksByState(this.states[index].stateCode));
    // return this.api.getParksByState(this.states[index].stateCode);
    // this.route.navigate(['/park-list'], { queryParams: { stateCode: 'this.states[this.index].stateCode' } });
  }
}
