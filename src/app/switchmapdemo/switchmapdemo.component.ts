import { Component, OnInit } from '@angular/core'
import { ApiservicesService } from '../service/apiservices.service'
import { debounce, debounceTime, switchMap, take } from 'rxjs'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-switchmapdemo',
  templateUrl: './switchmapdemo.component.html',
  styleUrls: ['./switchmapdemo.component.scss'],
})
export class SwitchmapdemoComponent implements OnInit {
  record: any = []
  initialRecord=[]
  qf!: FormGroup
  constructor(private api: ApiservicesService) {}

  ngOnInit(): void {
    this.fetchRecords()
    this.qf = new FormGroup({
      searchfrm: new FormControl(),
    })
    this.searchRecord()
  }

  fetchRecords() {
    this.api
      .fetchRecord()
      .pipe(take(1))
      .subscribe({
        next: (res: any) => {
          this.record = res
          this.initialRecord = res
        },
      })
  }

  searchRecord() {
    this.qf
      .get('searchfrm')
      ?.valueChanges.pipe(
        debounceTime(500),
        switchMap((val) => {
          return this.api.searchById(val)
        }),
      )
      .subscribe((val) => {
       if (this.qf
        .get('searchfrm')?.value?.length) {
          this.record = []
          this.record.push(val)
       }
       else{
          if(!this.qf.get('searchfrm')?.value?.length){
            this.record=this.initialRecord;
          }
        }
      })
  }
}
