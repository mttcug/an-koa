import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutePageComponent } from './mute-page.component';

describe('MutePageComponent', () => {
  let component: MutePageComponent;
  let fixture: ComponentFixture<MutePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
