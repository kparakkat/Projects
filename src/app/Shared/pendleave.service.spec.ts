import { TestBed } from '@angular/core/testing';

import { PendleaveService } from './pendleave.service';

describe('PendleaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendleaveService = TestBed.get(PendleaveService);
    expect(service).toBeTruthy();
  });
});
