// https://ithelp.ithome.com.tw/articles/10187638

import { interval } from 'rxjs'
import { take, zip } from 'rxjs/operators'

var source = interval(500).pipe(take(3))
var newest = interval(300).pipe(take(6))

var example = source.pipe(zip(newest, (x, y) => x + y))

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
// 0
// 2
// 4
// complete
