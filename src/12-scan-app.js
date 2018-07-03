// https://ithelp.ithome.com.tw/articles/10187882

import { fromEvent, empty, of } from 'rxjs'
import { mapTo, startWith, merge, scan } from 'rxjs/operators'

const addButton = document.getElementById('addButton')
const minusButton = document.getElementById('minusButton')
const state = document.getElementById('state')

const addClick = fromEvent(addButton, 'click').pipe(mapTo(1))
const minusClick = fromEvent(minusButton, 'click').pipe(mapTo(-1))

const numberState = empty().pipe(
  startWith(0),
  merge(addClick, minusClick),
  scan((origin, next) => origin + next, 0))

const numberState2 = of(0).pipe(
  merge(addClick, minusClick),
  scan((origin, next) => origin + next, 0))

numberState2
  .subscribe({
    next: (value) => { state.innerHTML = value },
    error: (err) => { console.log('Error: ' + err) },
    complete: () => { console.log('complete') }
  })
