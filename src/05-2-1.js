import { Observable } from 'rxjs'

var observable = Observable.create(function (observer) {
  observer.next('Jerry')
  observer.next('Anna')
  observer.complete()
  observer.next('not work')
})

var observer = {
  next: function (value) {
    console.log(value)
  },
  error: function (error) {
    console.log(error)
  },
  complete: function () {
    console.log('complete')
  }
}

observable.subscribe(observer)
