// https://ithelp.ithome.com.tw/articles/10187333

import { fromEvent } from 'rxjs'
import { map, takeUntil, concatAll } from 'rxjs/operators'

const dragDOM = document.getElementById('drag')

const mouseDown = fromEvent(dragDOM, 'mousedown')
const mouseUp = fromEvent(document, 'mouseup')
const mouseMove = fromEvent(document, 'mousemove')

mouseDown.pipe(
  map(ev => mouseMove.pipe(takeUntil(mouseUp))),
  concatAll(),
  map(event => ({
    x: event.clientX,
    y: event.clientY
  }))
)
  .subscribe(pos => {
    dragDOM.style.left = pos.x + 'px'
    dragDOM.style.top = pos.y + 'px'
  })
