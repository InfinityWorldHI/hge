import { TestBed } from '@angular/core/testing';

import { ReceptionloginService } from './receptionlogin.service';

describe('ReceptionloginService', () => {
  let service: ReceptionloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
