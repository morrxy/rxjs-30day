// https://ithelp.ithome.com.tw/articles/10188387

import { fromEvent, interval } from 'rxjs'
import { map, take, concatAll } from 'rxjs/operators'

var source = fromEvent(document, 'click')

var example = source.pipe(
  map(e => interval(1000).pipe(take(3))),
  concatAll()
)

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
