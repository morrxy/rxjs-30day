import { from } from 'rxjs'

var source = from(new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello RxJS!')
  }, 3000)
}))

source.subscribe({
  next: function (value) {
    console.log(value)
  },
  complete: function () {
    console.log('complete!')
  },
  error: function (error) {
    console.log(error)
  }
})
