// https://ithelp.ithome.com.tw/articles/10188194

import { from, interval } from 'rxjs'
import { zip, distinctUntilChanged } from 'rxjs/operators'

var source = from(['a', 'b', 'c', 'c', 'b'])
  .pipe(zip(interval(300), (x, y) => x))
var example = source.pipe(distinctUntilChanged())

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
// a
// b
// c
// b
// complete
