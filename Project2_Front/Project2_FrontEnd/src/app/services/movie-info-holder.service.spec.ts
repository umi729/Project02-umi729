import { TestBed } from '@angular/core/testing';

import { MovieInfoHolderService } from './movie-info-holder.service';

describe('MovieInfoHolderService', () => {
  let service: MovieInfoHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieInfoHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
