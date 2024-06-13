import { TestBed } from '@angular/core/testing';

import { PhotoSerService } from './photo-ser.service';

describe('PhotoSerService', () => {
  let service: PhotoSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
