// https://ithelp.ithome.com.tw/articles/10188387

import { fromEvent, from } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

function getPostData () {
  return window.fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
}
var source = fromEvent(document, 'click')

var example = source.pipe(
  mergeMap(
    e => from(getPostData()),
    (e, res, eIndex, resIndex) => res.title,
    3
  )
)

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
