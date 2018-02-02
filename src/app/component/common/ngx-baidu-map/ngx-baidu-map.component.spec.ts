import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBaiduMapComponent } from './ngx-baidu-map.component';

describe('NgxBaiduMapComponent', () => {
  let component: NgxBaiduMapComponent;
  let fixture: ComponentFixture<NgxBaiduMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBaiduMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBaiduMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
