// https://ithelp.ithome.com.tw/articles/10187005

import { Observable } from 'rxjs'

var observable = Observable.create(function (observer) {
  observer.next('Jerry')
  observer.next('Anna')
})

console.log('start')
observable.subscribe(
  function (value) {
    console.log(value)
  }
)
console.log('end')
