// https://ithelp.ithome.com.tw/articles/10188325

import { fromEvent, interval } from 'rxjs'
import { map, mergeAll, take } from 'rxjs/operators'

var click = fromEvent(document, 'click')
var source = click.pipe(
  map(e => interval(1000).pipe(take(3)))
)

var example = source.pipe(mergeAll(2))

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
