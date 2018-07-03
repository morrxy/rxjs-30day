// https://ithelp.ithome.com.tw/articles/10187043

import { of, Observable } from 'rxjs'

var people = of('Jerry', 'Anna')

function map (source, callback) {
  return Observable.create((observer) => {
    return source.subscribe(
      (value) => {
        try {
          observer.next(callback(value))
        } catch (e) {
          observer.error(e)
        }
      },
      (err) => { observer.error(err) },
      () => { observer.complete() }
    )
  })
}

var helloPeople = map(people, (item) => item + ' Hello~')

helloPeople.subscribe(console.log)
// Jerry Hello~
// Anna Hello~
