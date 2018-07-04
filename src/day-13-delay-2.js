// https://ithelp.ithome.com.tw/articles/10187999

import { interval } from 'rxjs'
import { delay, take } from 'rxjs/operators'

var source = interval(300).pipe(take(5))

var example = source.pipe(delay(new Date(new Date().getTime() + 1000)))

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
// 0
// 1
// 2
// 3
// 4
