import { TestBed } from '@angular/core/testing';

import { InterrupthttpService } from './interrupthttp.service';

describe('InterrupthttpService', () => {
  let service: InterrupthttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterrupthttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
