import { TestBed } from '@angular/core/testing';

import { NpsApiService } from './nps-api.service';

describe('NpsApiService', () => {
  let service: NpsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
