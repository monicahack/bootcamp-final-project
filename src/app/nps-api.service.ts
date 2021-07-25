import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParkResponse, Park, Webcams } from './interface';


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
  
  constructor(public client: HttpClient) { }
  
  getParks() {
    let parksURL = `${this.parksURL}?limit=${this.limit}&api_key=${this.api_key}`;
    return this.client.get<ParkResponse>(parksURL);
  }

  getParkDetails(parkCode: string) {
    let detailURL = `${this.parkDetailURL}?parkCode=${parkCode}&api_key=${this.api_key}`;
    return this.client.get<Park>(detailURL);
  }

  getWebcam() {
    let webcamsURL = `${this.webcamURL}?api_key=${this.api_key}`;
    return this.client.get<Webcams>(webcamsURL);
  }

}