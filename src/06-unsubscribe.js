import { timer } from 'rxjs'

var source = timer(1000, 1000)

// 取得 subscription
var subscription = source.subscribe({
  next: function (value) {
    console.log(value)
  },
  complete: function () {
    console.log('complete!')
  },
  error: function (error) {
    console.log('Throw Error: ' + error)
  }
})

setTimeout(() => {
  subscription.unsubscribe()
}, 5000)
