import { TestBed } from '@angular/core/testing';

import { BonbecService } from './bonbec.service';

describe('BonbecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BonbecService = TestBed.get(BonbecService);
    expect(service).toBeTruthy();
  });
});
