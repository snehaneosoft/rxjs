import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
  registeredText!:string
  constructor(private dataapi:DataserviceService) {
    this.dataapi.getData.subscribe((val)=>{
      this.registeredText = val
    })
   }

  ngOnInit(): void {
  }

}
