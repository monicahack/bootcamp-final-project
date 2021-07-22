import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomParkGeneratorComponent } from './random-park-generator.component';

describe('RandomParkGeneratorComponent', () => {
  let component: RandomParkGeneratorComponent;
  let fixture: ComponentFixture<RandomParkGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomParkGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomParkGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
