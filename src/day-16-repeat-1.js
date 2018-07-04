// https://ithelp.ithome.com.tw/articles/10188263

import { from, zip, interval } from 'rxjs'
import { repeat } from 'rxjs/operators'

var source = from(['a', 'b', 'c'])

var example = zip(source, interval(500), (x, y) => x)
  .pipe(repeat(1))

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
