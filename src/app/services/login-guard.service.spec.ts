import { TestBed } from '@angular/core/testing';

import { LoginCardService } from './login-guard.service';

describe('LoginCardService', () => {
  let service: LoginCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
