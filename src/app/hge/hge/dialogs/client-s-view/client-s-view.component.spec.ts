import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSViewComponent } from './client-s-view.component';

describe('ClientSViewComponent', () => {
  let component: ClientSViewComponent;
  let fixture: ComponentFixture<ClientSViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
