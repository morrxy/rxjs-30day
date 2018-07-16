// https://ithelp.ithome.com.tw/articles/10188750

import { Subject, interval } from 'rxjs'
import { multicast, tap, refCount } from 'rxjs/operators'

var source = interval(1000).pipe(
  tap(x => console.log('send: ' + x)),
  multicast(new Subject()),
  refCount()
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

var subscriptionA = source.subscribe(observerA) // 訂閱數 0 => 1

var subscriptionB
setTimeout(() => {
  subscriptionB = source.subscribe(observerB)
  // 訂閱數 0 => 2
}, 1000)
