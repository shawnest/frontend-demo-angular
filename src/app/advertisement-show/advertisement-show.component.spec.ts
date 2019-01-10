import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementShowComponent } from './advertisement-show.component';

describe('AdvertisementShowComponent', () => {
  let component: AdvertisementShowComponent;
  let fixture: ComponentFixture<AdvertisementShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
