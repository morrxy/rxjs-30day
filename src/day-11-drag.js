// https://ithelp.ithome.com.tw/articles/10187756

import './day-11-drag.scss'

import { fromEvent } from 'rxjs'
import { map, takeUntil, concatAll, filter, withLatestFrom } from 'rxjs/operators'

const video = document.getElementById('video')
const anchor = document.getElementById('anchor')

const scroll = fromEvent(document, 'scroll')

scroll.pipe(
  map(e => anchor.getBoundingClientRect().bottom < 0)
)
  .subscribe(bool => {
    if (bool) {
      video.classList.add('video-fixed')
    } else {
      video.classList.remove('video-fixed')
    }
  })

const mouseDown = fromEvent(video, 'mousedown')
const mouseUp = fromEvent(document, 'mouseup')
const mouseMove = fromEvent(document, 'mousemove')

mouseDown.pipe(
  filter(e => video.classList.contains('video-fixed')),
  map(e => mouseMove.pipe(takeUntil(mouseUp))),
  concatAll(),
  withLatestFrom(mouseDown, (move, down) => ({
    x: validValue(move.clientX - down.offsetX, window.innerWidth - 320, 0),
    y: validValue(move.clientY - down.offsetY, window.innerHeight - 180, 0)
  }))
)
  .subscribe(pos => {
    video.style.top = pos.y + 'px'
    video.style.left = pos.x + 'px'
  })

function validValue (value, max, min) {
  return Math.min(Math.max(value, min), max)
}
