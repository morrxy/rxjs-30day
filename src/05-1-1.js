import { Observable } from 'rxjs'

var observable = Observable.create(function (observer) {
  observer.next('Jerry')
  observer.next('Anna')
})

observable.subscribe(
  function (value) {
    console.log(value)
  }
)
