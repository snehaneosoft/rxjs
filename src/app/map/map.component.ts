import { Component, OnInit } from '@angular/core'
import { ApiservicesService } from '../service/apiservices.service'
import { map, take, tap } from 'rxjs'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  record: any = []
  resultsArr = []
  constructor(private api: ApiservicesService) {}

  ngOnInit(): void {
    this.fetch()
  }

  fetch() {
    // var results:any = []
    this.api
      .fetchMapRecord()
      .pipe(
        tap((val) => {
          console.log(val, 'before transofmed data')
        }),
        map((res: any) => {
          res.results.map((val: any) => {
            let dateStr = new Date(val.created)
            val.created = `${dateStr.getDate()}/${
              dateStr.getMonth() + 1
            }/${dateStr.getFullYear()}`
            console.log(val.created, 'results created at')
          })
          return res
        }),
      )
      .subscribe({
        next: (res) => {
          this.record = res.results
          console.log(this.record, 'res map')
        },
      })
  }
}
