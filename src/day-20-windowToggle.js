// https://ithelp.ithome.com.tw/articles/10188504

import { fromEvent, interval } from 'rxjs'
import { windowToggle, switchAll } from 'rxjs/operators'

var source = interval(1000)
var mouseDown = fromEvent(document, 'mousedown')
var mouseUp = fromEvent(document, 'mouseup')

var example = source.pipe(
  windowToggle(mouseDown, () => mouseUp),
  switchAll()
)

example.subscribe(console.log)
