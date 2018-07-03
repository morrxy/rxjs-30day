// https://ithelp.ithome.com.tw/articles/10187005

import { from } from 'rxjs'

var source = from('鐵人賽')

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
