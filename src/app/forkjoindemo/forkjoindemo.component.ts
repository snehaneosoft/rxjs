import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { forkJoin, of } from 'rxjs'

@Component({
  selector: 'app-forkjoindemo',
  templateUrl: './forkjoindemo.component.html',
  styleUrls: ['./forkjoindemo.component.scss'],
})
export class ForkjoindemoComponent implements OnInit {
  qf!: FormGroup;
  record:any=[]
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.qf= new FormGroup({
    // })
    this.fetchData()
    this.demoForkJoin()
  }

  fetchData() {
    let req1 = this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    let req2 = this.http.get('https://jsonplaceholder.typicode.com/todos/2')
    let req3 = this.http.get('https://jsonplaceholder.typicode.com/todos/3')
    forkJoin([req1, req2, req3]).subscribe({
      next: (res: any) => {
        this.record = res
        console.log(res, 'fork join impl')
      },
      error: (err: any) => {
        console.log(err,"fork join error")
      },
    })
  }

  demoForkJoin(){
    let req1 = of(1,2,3,4);
    let req2 = of('a','b');

    forkJoin([req1,req2]).subscribe({
      next: (res: any) => {
        //this.record = res
        console.log(res, 'emit last value')
      },
      error: (err: any) => {
        console.log(err,"fork join error")
      },
    })
  }
}
