import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  getData = new Subject<string>()

  registerData(data:any){
    this.getData.next(data)
  }

  constructor() { }
}
