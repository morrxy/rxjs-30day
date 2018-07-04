// https://ithelp.ithome.com.tw/articles/10187520

import { concat, of, interval } from 'rxjs'
import { take } from 'rxjs/operators'

var source = interval(1000).pipe(take(3))
var source2 = of(3)
var source3 = of(4, 5, 6)
var example = concat(source, source2, source3)

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// complete
