import { TestBed } from '@angular/core/testing';

import { RmsyteService } from './rmsyte.service';

describe('RmsyteService', () => {
  let service: RmsyteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RmsyteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
