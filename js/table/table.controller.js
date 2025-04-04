import * as model from './../model.js'
import * as view from './table.view.js'

function init() {
  const requests = model.getRequests()
  view.renderRequests(requests)
  addEventListeners()
}

function addEventListeners() {
  view.elements.select.addEventListener('change', filterProducts)
  view.elements.topStatusBar.addEventListener('click', filterByStatus)
}

function filterProducts() {
  const filter = model.changeFilter('products', this.value)
  const filteredRequests = model.filterRequests(filter)
  view.renderRequests(filteredRequests)
}

function filterByStatus(e) {
  const filter = model.changeFilter('status', e.target.dataset.value)
  const filteredRequests = model.filterRequests(filter)
  view.renderRequests(filteredRequests)

}

init()