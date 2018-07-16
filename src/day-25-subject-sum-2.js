// https://ithelp.ithome.com.tw/articles/10188805

import { Subject, interval } from 'rxjs'
import { map, take } from 'rxjs/operators'

const source = interval(1000).pipe(take(5))
const subject = new Subject()

const example = subject.pipe(
  map(x => {
    if (x === 1) {
      throw new Error('oops')
    }
    return x
  })
)

subject.subscribe(x => console.log('A', x))
example.subscribe(
  x => console.log('B', x),
  error => console.log('B Error:' + error)
)
subject.subscribe(x => console.log('C', x))

source.subscribe(subject)
