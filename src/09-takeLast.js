// https://ithelp.ithome.com.tw/articles/10187520

import { interval } from 'rxjs'
import { take, takeLast } from 'rxjs/operators'

var source = interval(1000)
var example = source.pipe(
  take(6),
  takeLast(2)
)

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
// 4
// 5
// complete
