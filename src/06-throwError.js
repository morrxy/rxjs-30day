// https://ithelp.ithome.com.tw/articles/10187005

import { throwError } from 'rxjs'

var source = throwError('Oop!')

source.subscribe({
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
