// https://ithelp.ithome.com.tw/articles/10188504

import { fromEvent, interval } from 'rxjs'
import { window, switchAll, count, map } from 'rxjs/operators'

var click = fromEvent(document, 'click')
var source = interval(1000)
var example = click.pipe(window(source))

example.pipe(
  map(innerObservable => innerObservable.pipe(count())),
  switchAll()
)
  .subscribe(console.log)
