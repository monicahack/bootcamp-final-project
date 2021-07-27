import { Component, OnInit } from '@angular/core';
import { NpsApiService } from '../nps-api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  searchName: string = '';

  constructor(public api:NpsApiService) { }

  keywordSearch() {
    // search.getAll(this.searchName: string): string[];
    // this.search.emit({keyword: this.searchName})
}

  ngOnInit(): void {
  }

}
