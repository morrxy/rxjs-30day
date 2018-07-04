// https://ithelp.ithome.com.tw/articles/10188121

import { interval } from 'rxjs'
import { take, debounceTime } from 'rxjs/operators'

var source = interval(300).pipe(take(5))
var example = source.pipe(debounceTime(1000))

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
// 4
// complete
