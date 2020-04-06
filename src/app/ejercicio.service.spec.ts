import { TestBed } from '@angular/core/testing';

import { EjercicioService } from './ejercicio.service';

describe('EjercicioService', () => {
  let service: EjercicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjercicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
