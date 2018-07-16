// https://ithelp.ithome.com.tw/articles/10188633

import { interval } from 'rxjs'
import { take } from 'rxjs/operators'

var source = interval(1000).pipe(take(3))

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

source.subscribe(observerA)
setTimeout(() => {
  source.subscribe(observerB)
}, 1000)

// "A next: 0"
// "A next: 1"
// "B next: 0"
// "A next: 2"
// "A complete!"
// "B next: 1"
// "B next: 2"
// "B complete!"
