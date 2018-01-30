import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerSortComponent } from './computer-sort.component';

describe('ComputerSortComponent', () => {
  let component: ComputerSortComponent;
  let fixture: ComponentFixture<ComputerSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
