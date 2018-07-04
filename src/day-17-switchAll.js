// https://ithelp.ithome.com.tw/articles/10188325

import { fromEvent, interval } from 'rxjs'
import { map, switchAll } from 'rxjs/operators'

var click = fromEvent(document, 'click')
var source = click.pipe(map(e => interval(1000)))

var example = source.pipe(switchAll())

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
