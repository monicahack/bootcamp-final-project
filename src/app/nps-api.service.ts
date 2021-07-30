import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParkResponse, Park, Webcams } from './interface';
import {
  StatesListComponent,
  StateListing,
} from './states-list/states-list.component';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from './search/search.component';
//imports bring in properties from the interfaces, when  you import, you can access data from another file


@Injectable({
  providedIn: 'root',
})
export class NpsApiService {
  parksURL = 'https://developer.nps.gov/api/v1/parks';
  parkDetailURL = 'https://developer.nps.gov/api/v1/parks';
  activitiesURL =
    'https://developer.nps.gov/api/v1/activities?api_key=BazAUNaZgkG8JZqeWIj3HTckfHrQsIfrRy2B2daq';
  amenitiesURL =
    'https://developer.nps.gov/api/v1/amenities?api_key=BazAUNaZgkG8JZqeWIj3HTckfHrQsIfrRy2B2daq';
  eventsURL =
    'https://developer.nps.gov/api/v1/events?api_key=BazAUNaZgkG8JZqeWIj3HTckfHrQsIfrRy2B2daq';
  thingsToDoURL =
    'https://developer.nps.gov/api/v1/thingstodo?api_key=BazAUNaZgkG8JZqeWIj3HTckfHrQsIfrRy2B2daq';
  webcamURL = 'https://developer.nps.gov/api/v1/webcams';
  api_key = 'BazAUNaZgkG8JZqeWIj3HTckfHrQsIfrRy2B2daq';
  limit = '467';
  states: StateListing[] = [];
  index = 0 + this.states.length;
 
//api key is a query parameter

  state: string = '';

  constructor(public client: HttpClient, private route: ActivatedRoute, public search: SearchComponent) {}

  getParks(state?: string, searchTerm?: string) {
    let parksURL = `${this.parksURL}?limit=${this.limit}&api_key=${this.api_key}`;
    if (state) {
      parksURL+= `&stateCode=${state}`
    }
    if (searchTerm) {
      parksURL+= `&q=${searchTerm}`
    }
    return this.client.get<ParkResponse>(parksURL);
  }

  getParkDetails(parkCode: string) {
    let detailURL = `${this.parkDetailURL}?parkCode=${parkCode}&api_key=${this.api_key}`;
    return this.client.get<Park>(detailURL);
  }

  getWebcam(parkCode: string) {
    let webcamsURL = `${this.webcamURL}?parkCode=${parkCode}&api_key=${this.api_key}`;
    return this.client.get<Webcams>(webcamsURL);
  }

  searchParks(searchParameters: any) {
    let requestParameters: any = {
      apikey: this.api_key,
    };
    if (searchParameters.fullName.length > 0) {
      requestParameters.fullName = searchParameters.fullName;
    }
    return this.client.get<ParkResponse>(this.parksURL, {
      params: requestParameters,
    });
  }
}
