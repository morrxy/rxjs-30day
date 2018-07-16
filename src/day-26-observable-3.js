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
  observer.complete() // error: complete is not a function
})

var observer = {
  next: function (value) {
    console.log(value)
  }
}

observable.subscribe(observer)
// 1
// 2
// 3
// "complete!"
// "still work"
