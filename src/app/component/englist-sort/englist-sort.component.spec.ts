import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglistSortComponent } from './englist-sort.component';

describe('EnglistSortComponent', () => {
  let component: EnglistSortComponent;
  let fixture: ComponentFixture<EnglistSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglistSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglistSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
