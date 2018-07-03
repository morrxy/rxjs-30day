// https://ithelp.ithome.com.tw/articles/10187520

import { interval } from 'rxjs'
import { take, last } from 'rxjs/operators'

var source = interval(1000)
var example = source.pipe(
  take(6),
  last()
)

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
// 5
// complete
