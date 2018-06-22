import { fromEvent } from 'rxjs'
import { take } from 'rxjs/operators'

fromEvent(document, 'click')
  .pipe(
    take(1)
  )
  .subscribe(
    x => console.log(x),
    err => console.log('err:', err),
    () => console.log('end')
  )
