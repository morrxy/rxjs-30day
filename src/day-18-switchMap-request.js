// https://ithelp.ithome.com.tw/articles/10188387

import { fromEvent, from } from 'rxjs'
import { switchMap } from 'rxjs/operators'

function getPostData () {
  return window.fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
}
var source = fromEvent(document, 'click')

var example = source.pipe(
  switchMap(e => from(getPostData()))
)

example.subscribe({
  next: (value) => { console.log(value) },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
