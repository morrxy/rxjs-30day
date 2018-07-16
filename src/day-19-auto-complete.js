// https://ithelp.ithome.com.tw/articles/10188457

import './day-19-auto-complete.scss'

import { fromEvent } from 'rxjs'
import { switchMap, filter, map, debounceTime } from 'rxjs/operators'

const url = 'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*'

const getSuggestList = (keyword) => window.fetch(url + '&search=' + keyword, { method: 'GET', mode: 'cors' })
  .then(res => res.json())

const searchInput = document.getElementById('search')
const suggestList = document.getElementById('suggest-list')

const keyword = fromEvent(searchInput, 'input')
const selectItem = fromEvent(suggestList, 'click')

keyword.pipe(
  debounceTime(100),
  switchMap(e => getSuggestList(e.target.value), (e, res) => res[1])
)
  .subscribe(list => render(list))

function render (arr = []) {
  suggestList.innerHTML = arr
    .map(item => '<li>' + item + '</li>')
    .join('')
}

selectItem.pipe(
  filter(e => e.target.matches('li')),
  map(e => e.target.innerText)
)
  .subscribe(text => {
    searchInput.value = text
    render()
  })
