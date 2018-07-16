// https://ithelp.ithome.com.tw/articles/10188876

// 預設空的 observer
const emptyObserver = {
  next: () => {},
  error: (err) => { throw err },
  complete: () => {}
}

class Observer {
  constructor (destinationOrNext, error, complete) {
    switch (arguments.length) {
      case 0:
        // 空的 observer
        this.destination = this.safeObserver(emptyObserver)
        break
      case 1:
        if (!destinationOrNext) {
          // 空的 observer
          this.destination = this.safeObserver(emptyObserver)
          return
        }
        if (typeof destinationOrNext === 'object') {
          // 傳入了 observer 物件
          this.destination = this.safeObserver(destinationOrNext)
        }
        break
      default:
        // 如果上面都不是，代表應該是傳入了一到三個 function
        this.destination = this.safeObserver(destinationOrNext, error, complete)
        break
    }
  }
  safeObserver (observerOrNext, error, complete) {
    let next

    if (typeof (observerOrNext) === 'function') {
      // observerOrNext 是 next function
      next = observerOrNext
    } else if (observerOrNext) {
      // observerOrNext 是 observer 物件
      next = observerOrNext.next || function () {}
      error = observerOrNext.error || function (err) {
        throw err
      }
      complete = observerOrNext.complete || function () {}
    }
    // 最後回傳我們預期的 observer 物件
    return {
      next: next,
      error: error,
      complete: complete
    }
  }

  next (value) {
    if (!this.isStopped && this.next) {
      // 先判斷是否停止過
      try {
        this.destination.next(value) // 傳送值
      } catch (err) {
        this.unsubscribe()
        throw err
      }
    }
  }

  error (err) {
    if (!this.isStopped && this.error) {
      // 先判斷是否停止過
      try {
        this.destination.error(err) // 傳送錯誤
      } catch (anotherError) {
        this.unsubscribe()
        throw anotherError
      }
      this.unsubscribe()
    }
  }

  complete () {
    if (!this.isStopped && this.complete) {
      // 先判斷是否停止過
      try {
        this.destination.complete() // 發送停止訊息
      } catch (err) {
        this.unsubscribe()
        throw err
      }
      this.unsubscribe() // 發送停止訊息後退訂
    }
  }

  unsubscribe () {
    this.isStopped = true
  }
}

function create (subscriber) {
  const observable = {
    subscribe: function (observerOrNext, error, complete) {
      const realObserver = new Observer(observerOrNext, error, complete)
      subscriber(realObserver)
      return realObserver
    }
  }
  return observable
}

var observable = create(function (observer) {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.complete()
  observer.next('not work')
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
