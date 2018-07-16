// https://ithelp.ithome.com.tw/articles/10188504

import { ReplaySubject, Subject } from 'rxjs'
import { } from 'rxjs/operators'

var subject = new ReplaySubject(2) // 重複發送最後 2 個元素
// var subject = new Subject()

var observerA = {
  next: value => console.log('A next: ' + value),
  error: error => console.log('A error: ' + error),
  complete: () => console.log('A complete!')
}

var observerB = {
  next: value => console.log('B next: ' + value),
  error: error => console.log('B error: ' + error),
  complete: () => console.log('B complete!')
}

subject.subscribe(observerA)
// "A next: 0"
subject.next(1)
// "A next: 1"
subject.next(2)
// "A next: 2"
subject.next(3)
// "A next: 3"

setTimeout(() => {
  subject.subscribe(observerB)
  // "B next: 2"
  // "B next: 3"
}, 3000)
