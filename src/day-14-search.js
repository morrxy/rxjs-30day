// https://ithelp.ithome.com.tw/articles/10188121

import { fromEvent } from 'rxjs'
import { map, debounceTime } from 'rxjs/operators'

const searchInput = document.getElementById('searchInput')
const theRequestValue = document.getElementById('theRequestValue')

fromEvent(searchInput, 'input').pipe(
  debounceTime(300),
  map(e => e.target.value))
  .subscribe((value) => {
    theRequestValue.textContent = value
  })
