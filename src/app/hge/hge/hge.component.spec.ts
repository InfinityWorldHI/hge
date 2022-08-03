import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HgeComponent } from './hge.component';

describe('HgeComponent', () => {
  let component: HgeComponent;
  let fixture: ComponentFixture<HgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
