import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core'
import { Subscription, interval, map, of, tap } from 'rxjs'

@Component({
  selector: 'app-tapdemo',
  templateUrl: './tapdemo.component.html',
  styleUrls: ['./tapdemo.component.scss'],
})
export class TapdemoComponent implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2) {}
  obsSubscription!: Subscription
  obsSubscription2!: Subscription
  @ViewChild('elcontainer', { static: true }) elContainer!: ElementRef
  myColor: string = ''
  appContent: string = ''
  ngOnInit(): void {
    this.tapDemo2()
  }

  ngAfterViewInit() {
    console.log(this.elContainer, '<-----')

    // const d2 = this.renderer.createElement('li');
    // const text = this.renderer.createText('res');
    // this.renderer.appendChild(d2, text);
    // this.renderer.appendChild(this.elContainer.nativeElement, d2);
  }

  tapDemo() {
    let tapRe = of(1, 2, 3, 4)
    tapRe
      .pipe(
        tap((val) => console.log('before action value', val)),
        map((res) => res + 5),
        tap((val) => console.log(val, 'aftertap')),
      )
      .subscribe({
        next: (res) => {
          console.log(res, 'final res of tap')
        },
      })
  }
  tapDemo1() {
    //   let tapRe = of(1, 2, 3, 4)
    let arr = ['a', 'b', 'c', 'd']
    let source = interval(1500)
    this.obsSubscription = source
      .pipe(
        //  tap((val) => console.log('before action value', val)),
        tap((val: any) => {
          if (val == 4) {
            this.obsSubscription.unsubscribe()
          }
        }),
        map((res) => arr[res]),
      )
      .subscribe({
        next: (res) => {
          console.log(res, 'final res of tap')
        },
      })
  }
  tapDemo2() {
    //   let tapRe = of(1, 2, 3, 4)
    let arr = ['yellow', 'blue', 'red', 'green']
    let source = interval(1500)
    this.obsSubscription2 = source
      .pipe(
        //  tap((val) => console.log('before action value', val)),
        tap((val: any) => {
          if (val == 4) {
            this.obsSubscription2.unsubscribe()
          }
        }),
        map((res) => arr[res]),
      )
      .subscribe({
        next: (res) => {
          const d2 = this.renderer.createElement('li')
          const text = this.renderer.createText(res)
          this.renderer.appendChild(d2, text)
          this.renderer.appendChild(this.elContainer.nativeElement, d2)
          this.myColor = res
          d2.style.border = `solid 1px ${this.myColor}`
          d2.style.color = `${this.myColor}`
        },
      })
  }
}
