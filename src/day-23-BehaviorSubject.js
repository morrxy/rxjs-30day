// https://ithelp.ithome.com.tw/articles/10188504

import { BehaviorSubject, Subject } from 'rxjs'
// import { } from 'rxjs/operators'

var subject = new BehaviorSubject(0) // 0 為起始值
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
  // "B next: 3"
}, 3000)
