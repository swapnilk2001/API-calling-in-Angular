import { TestBed } from '@angular/core/testing';

import { CommentSerService } from './comment-ser.service';

describe('CommentSerService', () => {
  let service: CommentSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
