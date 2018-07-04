// https://ithelp.ithome.com.tw/articles/10187999

import { fromEvent } from 'rxjs'
import { map, delay } from 'rxjs/operators'

var imgList = document.getElementsByTagName('img')

var movePos = fromEvent(document, 'mousemove')
  .pipe(map(e => ({
    x: e.clientX,
    y: e.clientY
  })))

function followMouse (DOMArr) {
  const delayTime = 600
  DOMArr.forEach((item, index) => {
    movePos
      .pipe(delay(delayTime * (Math.pow(0.65, index) + Math.cos(index / 4)) / 2))
      .subscribe(function (pos) {
        item.style.transform = 'translate3d(' + pos.x + 'px, ' + pos.y + 'px, 0)'
      })
  })
}

followMouse(Array.from(imgList))
