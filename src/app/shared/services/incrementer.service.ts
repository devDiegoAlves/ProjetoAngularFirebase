import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncrementerService {

  valor: number = 0;

  constructor() { }
}
