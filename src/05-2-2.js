import { Observable } from 'rxjs'

var observable = Observable.create(function (observer) {
  try {
    observer.next('Jerry')
    observer.next('Anna')
    throw 'some exception'
  } catch (e) {
    observer.error(e)
  }
})

var observer = {
  next: function (value) {
    console.log(value)
  },
  error: function (error) {
    console.log('Error: ', error)
  },
  complete: function () {
    console.log('complete')
  }
}

observable.subscribe(observer)
