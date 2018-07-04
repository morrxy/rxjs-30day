// https://ithelp.ithome.com.tw/articles/10188263

import { from, zip, interval } from 'rxjs'
import { map, retryWhen } from 'rxjs/operators'

var source = zip(from(['a', 'b', 'c', 'd', 2]), interval(500), (x, y) => x)

var example = source.pipe(
  map(x => x.toUpperCase()),
  retryWhen(errorObs => errorObs.pipe(
    map(err => fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => console.log(json)))
  ))
)

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
