import { never } from 'rxjs'

var source = never()

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
