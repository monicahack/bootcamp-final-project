import { Component, Output, EventEmitter } from '@angular/core';
import { NpsApiService } from '../nps-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output()search = new EventEmitter<string>();

  searchName: string = '';

  constructor(public api:NpsApiService) { }

  keywordSearch() {
    this.search.emit(this.searchName)
  }
}
