import { Injectable } from '@angular/core';
import { Emppendleave } from './emppendleave';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PendleaveService {
  public empPendLeve: Emppendleave;
  constructor(private http: Http) { }

  public getempPendLeve(): Emppendleave{
    return this.empPendLeve;
  }

  public setempPendLeave(value: Emppendleave) : void
  {
    this.empPendLeve = value;
  }
}
