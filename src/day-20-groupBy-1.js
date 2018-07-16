// https://ithelp.ithome.com.tw/articles/10188504

import { interval } from 'rxjs'
import { take, groupBy } from 'rxjs/operators'

var source = interval(300).pipe(take(5))

var example = source.pipe(
  groupBy(x => x % 2)
)

example.subscribe(console.log)

// GroupObservable { key: 0, ...}
// GroupObservable { key: 1, ...}
