import { TestBed } from '@angular/core/testing';

import { GetPictureBanchService } from './get-picture-banch.service';

describe('GetPictureBanchService', () => {
  let service: GetPictureBanchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPictureBanchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
