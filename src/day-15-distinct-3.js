// https://ithelp.ithome.com.tw/articles/10188194

import { from, interval } from 'rxjs'
import { zip, distinct } from 'rxjs/operators'

var source = from(['a', 'b', 'c', 'a', 'c'])
  .pipe(zip(interval(300), (x, y) => x))
var flushes = interval(1300)
var example = source.pipe(distinct(null, flushes))

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
// a
// b
// c
// c
// complete
