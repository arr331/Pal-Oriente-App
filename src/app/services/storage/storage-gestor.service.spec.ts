import { TestBed } from '@angular/core/testing';

import { StorageGestorService } from './storage-gestor.service';

describe('StorageGestorService', () => {
  let service: StorageGestorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageGestorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
