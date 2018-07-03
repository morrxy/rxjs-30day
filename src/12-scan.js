// https://ithelp.ithome.com.tw/articles/10187882

import { from, interval } from 'rxjs'
import { zip } from 'rxjs/operators'

var source = from('hello').pipe(
  zip(interval(600), (x, y) => x)
)

var example = source.scan((origin, next) => origin + next, '')

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
// h
// he
// hel
// hell
// hello
// complete
