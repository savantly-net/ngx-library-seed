import { TestBed, inject } from '@angular/core/testing';

import { ExampleService } from './example.service';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('ExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleService]
    });
  });

  it('should be created', inject([ExampleService], (service: ExampleService) => {
    expect(service).toBeTruthy();
  }));
});
