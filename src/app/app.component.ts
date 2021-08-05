import { Component, OnInit } from '@angular/core';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { Park } from './interface';
import { NpsApiService } from './nps-api.service';
import { states } from './states-list/states-list.component';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Home | Go Park Yourself';
  faTree = faTree;
  parkCode: string = '';
  stateCode: string = '';
  stateName?: string = '';
  park: Park[] = [];
  isSearched: boolean = false;

  constructor(
    public api: NpsApiService,
    private route: Router,
    private titleService: Title
    ) {}

  queryParam: string = '';

  ngOnInit(): void {
    //sets page title
    this.titleService.setTitle(this.title);
  } 
  
  keywordSearch(search: any) {
    this.route.navigate(['park-list'], { queryParams: { search: search } });
    console.log(search);
  }
}
