// https://ithelp.ithome.com.tw/articles/10188325

import { fromEvent, interval } from 'rxjs'
import { map, concatAll } from 'rxjs/operators'

var click = fromEvent(document, 'click')
var source = click.pipe(map(e => interval(1000)))

var example = source
  .pipe(concatAll())

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
// (點擊後)
// 0
// 1
// 2
// 3
// 4
// 5 ...
