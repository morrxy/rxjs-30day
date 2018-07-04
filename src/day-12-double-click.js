// https://ithelp.ithome.com.tw/articles/10187882

import { fromEvent } from 'rxjs'
import { bufferTime, filter } from 'rxjs/operators'

const click = fromEvent(document, 'click')
const example = click.pipe(
  bufferTime(500),
  filter(arr => arr.length >= 2)
)

example.subscribe({
  next: (value) => { console.log('success') },
  error: (err) => { console.log('Error: ' + err) },
  complete: () => { console.log('complete') }
})
