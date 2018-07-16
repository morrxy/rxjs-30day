// https://ithelp.ithome.com.tw/articles/10188988

import { Observable, asyncScheduler } from 'rxjs'
import { observeOn } from 'rxjs/operators'

var observable = Observable.create(function (observer) {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.complete()
})

console.log('before subscribe')
observable
  .pipe(observeOn(asyncScheduler)) // 設為 async
  .subscribe({
    next: (value) => { console.log(value) },
    error: (err) => { console.log('Error: ' + err) },
    complete: () => { console.log('complete') }
  })
console.log('after subscribe')

// "before subscribe"
// "after subscribe"
// 1
// 2
// 3
// "complete"
