import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core'
import {
  Subject,
  interval,
  of,
  take,
  takeLast,
  takeUntil,
  takeWhile,
} from 'rxjs'

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  arr = of('angular', 'node', 'react', 'python', 'java')
  @ViewChild('elcontainer', { static: true }) elcontainer!: ElementRef
  @ViewChild('elcontainer1', { static: true }) elcontainer1!: ElementRef
  @ViewChild('elcontainer2', { static: true }) elcontainer2!: ElementRef
  destroyed = new Subject()
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.takeDemo()
    this.takeLastDemo()
    this.takeWhileDemo()
  }

  dynamicContainer(res: any, id: any) {
    const d2 = this.renderer.createElement('li')
    const d2Text = this.renderer.createText(res)
    this.renderer.appendChild(d2, d2Text)
    this.renderer.appendChild(id, d2)
  }

  takeDemo() {
    this.arr
      .pipe(take(4)) // here n = 2 no.of values to emit.
      .subscribe({
        next: (res: any) => {
          this.dynamicContainer(res, this.elcontainer.nativeElement)
          console.log(res, 'take example')
        },
      })
  }

  takeLastDemo() {
    this.arr.pipe(takeLast(2), takeUntil(this.destroyed)).subscribe({
      next: (res: any) => {
        this.dynamicContainer(res, this.elcontainer1.nativeElement)
      },
    })
  }
  takeUntilDemo() {
    interval(1000)
      .pipe(takeUntil(this.destroyed))
      .subscribe({
        next: (res: any) => {
          this.dynamicContainer(res, this.elcontainer2.nativeElement)
        },
      })
  }

  takeWhileDemo() {
    let arr = of(1, 2, 3, 4, 5)
    arr.pipe(takeWhile((val) => val > 3,true)).subscribe({
      next: (res) => {
        console.log(res,"res")
      },
    })
  }

  stopObs() {
    this.destroyed.next('')
    this.destroyed.complete()
  }

  ngOnDestroy() {
    // this.stopObs()
    console.log('destroy')
  }
}
