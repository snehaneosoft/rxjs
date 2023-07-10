import { Component, OnInit } from '@angular/core'
import { ApiservicesService } from '../service/apiservices.service'
import { filter, from, map } from 'rxjs'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  record: any = []
  constructor(private apiService: ApiservicesService) {}

  ngOnInit(): void {
    this.fetchRecord()
    //  this.filterData()
  }

  // filterData() {
  //   let value:any= [
  //     {
  //       status: 'alive',
  //       name: 'abc',
  //     },
  //     {
  //       status: 'Dead',
  //       name: 'abhimanyu',
  //     },
  //     {
  //       status: 'unknown',
  //       name: 'pankaj',
  //     },
  //   ]

  //   let valData = from(value)

  //   valData.pipe(
  //     filter((val:any)=>{
  //      if(val.status == 'alive'){
  //       console.log(val);

  //       return val
  //      }

  //     })
  //   ).subscribe({
  //     next:(res:any)=>{
  //       console.log(res,"final response");

  //     }
  //   })
  // }

  // fetch() {
  //   // let values:any = [
  //   //   {
  //   //     name: "John",
  //   //     age: 30
  //   //   },
  //   //   {
  //   //     name: "alex",
  //   //     age: 40
  //   //   }
  //   // ];
  //   // values.pipe(filter((val:any)=> {return val.age > 30}))
  //   // .subscribe({
  //   //   next:(res:any)=>{
  //   //     console.log(res);
  //   //   }
  //   // })
  //   var resultsArr :any = []
  //   this.api
  //     .fetchMapRecord()
  //     .pipe(
  //       map((res: any) => {
  //         resultsArr = res
  //         //  res.results.map((val: any) => {
  //         //   filter((val: any) => {
  //         //     return val.episode == 'S01E10' && val
  //         //   })
  //         // })
  //         // return res
  //       }),
  //       resultsArr.filter((val:any)=>{
  //         console.log("filter",val);

  //       })
  //     )
  //     //  filter((val:any)=>{
  //     //   console.log(val,"val");

  //     //   return val.episode == "S01E10"
  //     //  })
  //     //)
  //     .subscribe({
  //       next: (val: any) => {
  //         console.log(val,"final val response")
  //       },
  //     })
  // }

  fetchRecord() {
    this.apiService
      .fetchMergeRecord()
      .pipe(
        map((res: any) => {
          return res.results.filter((val: any) => {
            if (val.status == 'Alive') {
              return val
            }
          })
        }),
      )
      .subscribe({
        next: (res: any) => {
          this.record = res
          console.log(this.record, 'latest record')
        },
        error: (err: any) => {
          console.log(err)
        },
      })
  }
}
