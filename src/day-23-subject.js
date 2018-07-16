// https://ithelp.ithome.com.tw/articles/10188504

import { Subject } from 'rxjs'
import { mapTo, scan, tap } from 'rxjs/operators'

main()

function main () {
  document.body.innerHTML = document.body.innerHTML + '<button id="btn">click me</button>'

  var btn = document.querySelector('#btn')

  let state = { count: 0 }
  const sub = new Subject()

  sub.pipe(
    tap(x => console.log(x)),
    mapTo(1),
    scan((acc, curr) => {
      console.log('acc, curr:', acc, curr)
      return acc + curr
    })
  )
    .subscribe(
      x => {
        console.log('subscribe: ', x)
        state.count = x
        btn.innerHTML = state.count
      }
    )

  btn.addEventListener('click', function (ev) {
    console.log('click btn!')
    sub.next(ev)
  })
}
