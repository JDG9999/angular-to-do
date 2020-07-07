import { TestBed } from '@angular/core/testing';

import { PeticionesSOAPService } from './peticiones-soap.service';

describe('PeticionesSOAPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeticionesSOAPService = TestBed.get(PeticionesSOAPService);
    expect(service).toBeTruthy();
  });
});
