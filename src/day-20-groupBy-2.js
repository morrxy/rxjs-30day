// https://ithelp.ithome.com.tw/articles/10188504

import { from, interval, zip } from 'rxjs'
import { groupBy, map, mergeAll, reduce } from 'rxjs/operators'

var people = [
  {name: 'Anna', score: 100, subject: 'English'},
  {name: 'Anna', score: 90, subject: 'Math'},
  {name: 'Anna', score: 96, subject: 'Chinese'},
  {name: 'Jerry', score: 80, subject: 'English'},
  {name: 'Jerry', score: 100, subject: 'Math'},
  {name: 'Jerry', score: 90, subject: 'Chinese'}
]

var source = zip(
  from(people),
  interval(300),
  (x, y) => x
)

var example = source.pipe(
  groupBy(person => person.name),
  map(group => {
    return group.pipe(
      reduce((acc, curr) => ({
        name: curr.name,
        score: curr.score + acc.score
      })))
  }),
  mergeAll()
)

example.subscribe(console.log)
// { name: "Anna", score: 286 }
// { name: 'Jerry', score: 270 }
