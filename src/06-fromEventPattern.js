// https://ithelp.ithome.com.tw/articles/10187005

import { fromEventPattern } from 'rxjs'

class Producer {
  constructor () {
    this.listeners = []
  }
  addListener (listener) {
    if (typeof listener === 'function') {
      this.listeners.push(listener)
    } else {
      throw new Error('listener 必須是 function')
    }
  }
  removeListener (listener) {
    this.listeners.splice(this.listeners.indexOf(listener), 1)
  }
  notify (message) {
    this.listeners.forEach(listener => {
      listener(message)
    })
  }
}

var egghead = new Producer()

var source = fromEventPattern(
  (handler) => egghead.addListener(handler),
  (handler) => egghead.removeListener(handler)
)

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

egghead.notify('Hello! Can you hear me?')
// Hello! Can you hear me?
