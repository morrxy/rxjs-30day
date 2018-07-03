// https://ithelp.ithome.com.tw/articles/10187638

import { interval, from } from 'rxjs'
import { zip, withLatestFrom } from 'rxjs/operators'

var main = from('hello').pipe(zip(interval(500), (x, y) => x))
var some = from([0, 1, 0, 0, 0, 1]).pipe(zip(interval(300), (x, y) => x))

var example = main.pipe(
  withLatestFrom(some, (x, y) => {
    return y === 1 ? x.toUpperCase() : x
  })
)

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
