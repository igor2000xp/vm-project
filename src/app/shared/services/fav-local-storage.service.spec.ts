import { TestBed } from '@angular/core/testing';

import { FavLocalStorageService } from './fav-local-storage.service';

describe('FavLocalStorageService', () => {
  let service: FavLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
