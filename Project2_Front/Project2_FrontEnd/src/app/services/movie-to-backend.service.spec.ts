import { TestBed } from '@angular/core/testing';

import { MovieToBackendService } from './movie-to-backend.service';

describe('MovieToBackendService', () => {
  let service: MovieToBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieToBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
