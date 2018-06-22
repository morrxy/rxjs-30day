import { fromEvent } from 'rxjs'
import { map, takeUntil, concatAll } from 'rxjs/operators'

const dragDOM = document.getElementById('drag')
const body = document.body

const mouseDown = fromEvent(dragDOM, 'mousedown')
const mouseUp = fromEvent(body, 'mouseup')
const mouseMove = fromEvent(body, 'mousemove')

mouseDown.pipe(
  map(ev => mouseMove),
  takeUntil(mouseUp),
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
