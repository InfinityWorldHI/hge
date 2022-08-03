import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterEditDialogComponent } from './counter-edit-dialog.component';

describe('CounterEditDialogComponent', () => {
  let component: CounterEditDialogComponent;
  let fixture: ComponentFixture<CounterEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
