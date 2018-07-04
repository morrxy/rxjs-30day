// https://ithelp.ithome.com.tw/articles/10188194

import { from, interval } from 'rxjs'
import { zip, distinct } from 'rxjs/operators'

var source = from([{value: 'a'}, { value: 'b' }, { value: 'c' }, { value: 'a' }, { value: 'c' }])
  .pipe(zip(interval(300), (x, y) => x))

var example = source.pipe(distinct((x) => {
  return x.value
}))

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
// {value: "a"}
// {value: "b"}
// {value: "c"}
// complete
