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
})

var observer = {
  next: function (val) {
    console.log(val)
  }
}

observable.subscribe(observer)
// 1
// 2
// 3
