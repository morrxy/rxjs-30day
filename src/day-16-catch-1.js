// https://ithelp.ithome.com.tw/articles/10188263

import { from, interval, of, zip } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

var source = zip(from(['a', 'b', 'c', 'd', 2]), interval(500), (x, y) => x)

var example = source.pipe(
  map(x => x.toUpperCase()),
  catchError(error => of('h'))
)

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
