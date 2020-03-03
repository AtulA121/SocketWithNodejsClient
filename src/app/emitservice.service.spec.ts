import { TestBed } from '@angular/core/testing';

import { EmitserviceService } from './emitservice.service';

describe('EmitserviceService', () => {
  let service: EmitserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmitserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
