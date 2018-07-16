// https://ithelp.ithome.com.tw/articles/10188504

import { AsyncSubject, Subject } from 'rxjs'
import { } from 'rxjs/operators'

var subject = new AsyncSubject()
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
subject.next(1)
subject.next(2)
subject.next(3)
subject.complete()
// "A next: 3"
// "A complete!"

setTimeout(() => {
  subject.subscribe(observerB)
  // "B next: 3"
  // "B complete!"
}, 3000)
