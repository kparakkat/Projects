import { TestBed } from '@angular/core/testing';

import { LeaveapplicationsService } from './leaveapplications.service';

describe('LeaveapplicationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaveapplicationsService = TestBed.get(LeaveapplicationsService);
    expect(service).toBeTruthy();
  });
});
