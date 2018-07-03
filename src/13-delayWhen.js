// https://ithelp.ithome.com.tw/articles/10187999

import { interval, empty } from 'rxjs'
import { take, delay, delayWhen } from 'rxjs/operators'

var source = interval(300).pipe(take(5))

var example = source.pipe(
  delayWhen(
    x => empty().pipe(delay(500 * x * x))
  ))

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
