// https://ithelp.ithome.com.tw/articles/10188750

import { interval, AsyncSubject } from 'rxjs'
import { tap, refCount, publishLast, multicast, take } from 'rxjs/operators'

var source = interval(1000).pipe(
  take(3),
  tap(x => console.log('send: ' + x)),
  multicast(new AsyncSubject()),
  // publishLast(),
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
}, 4000)

setTimeout(() => {
  subscriptionA.unsubscribe() // 訂閱數 2 => 1
  subscriptionB.unsubscribe() // 訂閱數 1 => 0，source 停止發送元素
}, 5000)
