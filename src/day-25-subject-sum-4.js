// https://ithelp.ithome.com.tw/articles/10188805

import { Subject, interval } from 'rxjs'
import { map, take, multicast, refCount } from 'rxjs/operators'

var result = interval(1000).pipe(
  take(6),
  map(x => Math.random())
)

var subA = result.subscribe(x => console.log('A: ' + x))
var subB = result.subscribe(x => console.log('B: ' + x))
