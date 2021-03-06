// https://ithelp.ithome.com.tw/articles/10187882

import { interval } from 'rxjs'
import { bufferTime } from 'rxjs/operators'

var source = interval(300)
var example = source.pipe(bufferTime(1000))

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
// [0,1,2]
// [3,4,5]
// [6,7,8]...
