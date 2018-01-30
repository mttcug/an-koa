import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbySortComponent } from './hobby-sort.component';

describe('HobbySortComponent', () => {
  let component: HobbySortComponent;
  let fixture: ComponentFixture<HobbySortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbySortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbySortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
