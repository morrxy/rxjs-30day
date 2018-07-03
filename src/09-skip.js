// https://ithelp.ithome.com.tw/articles/10187520

import { interval } from 'rxjs'
import { skip } from 'rxjs/operators'

var source = interval(1000)
var example = source.pipe(
  skip(3)
)

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
// 3
// 4
// 5...
