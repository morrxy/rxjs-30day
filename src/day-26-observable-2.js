// https://ithelp.ithome.com.tw/articles/10188876

function create (subscriber) {
  var observable = {
    subscribe: function (observer) {
      subscriber(observer)
    }
  }
  return observable
}

var observable = create(function (observer) {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.complete()
  observer.next('still work')
})

var observer = {
  next: function (value) {
    console.log(value)
  },
  complete: function () {
    console.log('complete!')
  }
}

observable.subscribe(observer)
// 1
// 2
// 3
// "complete!"
// "still work"
