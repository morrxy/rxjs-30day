// https://ithelp.ithome.com.tw/articles/10188750

import { Subject, interval } from 'rxjs'
import { take, multicast } from 'rxjs/operators'

var source = interval(1000).pipe(
  take(3),
  multicast(new Subject())
)

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

source.subscribe(observerA) // subject.subscribe(observerA)
source.connect() // source.subscribe(subject)

setTimeout(() => {
  source.subscribe(observerB) // subject.subscribe(observerB)
}, 1000)
