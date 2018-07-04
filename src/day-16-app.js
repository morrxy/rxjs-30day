// https://ithelp.ithome.com.tw/articles/10188263

import { from, zip, interval, concat, empty } from 'rxjs'
import { map, catchError, startWith, delay } from 'rxjs/operators'

const title = document.getElementById('title')

var source = zip(from(['a', 'b', 'c', 'd', 2]), interval(500), (x, y) => x)
  .pipe(
    map(x => x.toUpperCase())
  )
// 通常 source 會是建立即時同步的連線，像是 web socket

var example = source.pipe(
  catchError((error, obs) => concat(
    empty().pipe(startWith('連線發生錯誤： 5秒後重連')),
    obs.pipe(delay(5000))
  ))
)

example.subscribe({
  next: (value) => { title.innerText = value },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
