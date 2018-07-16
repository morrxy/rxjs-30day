// https://ithelp.ithome.com.tw/articles/10188504

import { fromEvent, interval } from 'rxjs'
import { window, switchAll } from 'rxjs/operators'

var click = fromEvent(document, 'click')
var source = interval(1000)
var example = source.pipe(window(click))

example.pipe(switchAll())
  .subscribe(console.log)
// 0
// 1
// 2
// 3
// 4
// 5 ...
