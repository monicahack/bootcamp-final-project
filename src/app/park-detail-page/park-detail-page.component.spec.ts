import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkDetailPageComponent } from './park-detail-page.component';

describe('ParkDetailPageComponent', () => {
  let component: ParkDetailPageComponent;
  let fixture: ComponentFixture<ParkDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
