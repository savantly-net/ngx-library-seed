import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {
  logout: () => void;
  login: (username: string, password: string) => boolean;

  constructor() { }
}
