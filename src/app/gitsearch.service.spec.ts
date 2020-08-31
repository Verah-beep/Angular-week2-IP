import { TestBed } from '@angular/core/testing';

import { GitsearcherService } from './gitsearch.service';

describe('GitsearchService', () => {
  let service: GitsearcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitsearcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
