import { TestBed } from '@angular/core/testing';

import { GovernmentBFPService } from './government-bfp.service';

describe('GovernmentBFPService', () => {
  let service: GovernmentBFPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GovernmentBFPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
