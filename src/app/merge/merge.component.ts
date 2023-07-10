import { Component, OnInit } from '@angular/core'
import { ApiservicesService } from '../service/apiservices.service'
import { FormControl, FormGroup } from '@angular/forms'
import { merge } from 'rxjs'

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss'],
})
export class MergeComponent implements OnInit {
  record: any = []
  qf!: FormGroup
  constructor(private apiService: ApiservicesService) {}

  ngOnInit(): void {
    this.qf = new FormGroup({
      status: new FormControl(),
      gender: new FormControl(),
    })
    this.fetchRecord()
    this.onChangeFetchData()
  }

  fetchRecord() {
    this.apiService.fetchMergeRecord().subscribe({
      next: (res: any) => {
        this.record = res?.results
      },
      error: (err: any) => {
        console.log(err)
      },
    })
  }

  onChangeFetchData() {
    let reqControl = ['status', 'gender']
    merge(
      ...reqControl.map((name) => this.qf.get(name)?.valueChanges),
    ).subscribe((val) => {
      let st = this.qf.get('status')?.value
      let g = this.qf.get('gender')?.value
      console.log(st, 'st')
      console.log(g, 'g')
      if (st && g) {
        this.apiService.changedApiTrigger(st, g).subscribe({
          next: (res: any) => {
            this.record = res.results
            console.log(res, 'res')
          },
          error: (err: any) => {
            console.log(err)
          },
          complete: () => {},
        })
      }
    })
  }
}
