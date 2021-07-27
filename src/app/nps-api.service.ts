import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParkResponse, Park, Webcams } from './interface';
import { StatesListComponent, StateListing } from './states-list/states-list.component';
import { ActivatedRoute } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class NpsApiService {
  parksURL = 'https://developer.nps.gov/api/v1/parks';
  parkDetailURL ='https://developer.nps.gov/api/v1/parks';
  activitiesURL = 'https://developer.nps.gov/api/v1/activities?api_key=BazAUNaZgkG8JZqeWIj3HTckfHrQsIfrRy2B2daq';
  amenitiesURL = 'https://developer.nps.gov/api/v1/amenities?api_key=BazAUNaZgkG8JZqeWIj3HTckfHrQsIfrRy2B2daq';
  eventsURL = 'https://developer.nps.gov/api/v1/events?api_key=BazAUNaZgkG8JZqeWIj3HTckfHrQsIfrRy2B2daq';
  thingsToDoURL = 'https://developer.nps.gov/api/v1/thingstodo?api_key=BazAUNaZgkG8JZqeWIj3HTckfHrQsIfrRy2B2daq';
  webcamURL = 'https://developer.nps.gov/api/v1/webcams'
  api_key = 'BazAUNaZgkG8JZqeWIj3HTckfHrQsIfrRy2B2daq';
  limit = '467';
  states: StateListing[] = [];
  index = 0 + this.states.length;
  parkLimit = '50';
  // stateInitial = this.states[this.index].stateCode;
  // stateInitial = '';

  
  constructor(public client: HttpClient, private route:ActivatedRoute) { }
  
  getParks() {
    let parksURL = `${this.parksURL}?limit=${this.limit}&api_key=${this.api_key}`;
    return this.client.get<ParkResponse>(parksURL);

  }

/* not being used. old code when trying to paginate   getParkList() {
    let parksURL = `${this.parksURL}?limit=${this.parkLimit}&api_key=${this.api_key}`+ "&start=51";
    return this.client.get<ParkResponse>(parksURL);
  } */
  
  getParkDetails(parkCode: string) {
    let detailURL = `${this.parkDetailURL}?parkCode=${parkCode}&api_key=${this.api_key}`;
    return this.client.get<Park>(detailURL);
  }

  getWebcam(parkCode: string) {
    let webcamsURL = `${this.webcamURL}?parkCode=${parkCode}&api_key=${this.api_key}`;
    return this.client.get<Webcams>(webcamsURL);
  }

  getParksByState(stateCode: any) {
    let stateInitial = this.states[this.index].stateCode;
    let parksURLbyState = `${this.parksURL}?stateCode=${stateInitial}&limit=${this.limit}&api_key=${this.api_key}`;
    return this.client.get<ParkResponse>(parksURLbyState);
    // return parksURLbyState;
  }
}