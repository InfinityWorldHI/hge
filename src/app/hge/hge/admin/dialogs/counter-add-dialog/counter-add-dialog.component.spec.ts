import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAddDialogComponent } from './counter-add-dialog.component';

describe('CounterAddDialogComponent', () => {
  let component: CounterAddDialogComponent;
  let fixture: ComponentFixture<CounterAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
