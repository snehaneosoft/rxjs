import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  
  constructor(private dataService:DataserviceService) { }

  ngOnInit(): void {
  }

  register(inputval:any){
    console.log(inputval);
    this.dataService.registerData(inputval)
  }

}
