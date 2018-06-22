import { Observable } from 'rxjs'

var observable = Observable.create(function (observer) {
  observer.next('Jerry')
  observer.next('Anna')
  setTimeout(() => {
    observer.next('RxJS 30 days!')
  }, 30)
})

console.log('start')
observable.subscribe(
  function (value) {
    console.log(value)
  }
)
console.log('end')
