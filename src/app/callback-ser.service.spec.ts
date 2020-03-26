import { TestBed } from '@angular/core/testing';

import { CallbackSerService } from './callback-ser.service';

describe('CallbackSerService', () => {
  let service: CallbackSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallbackSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
