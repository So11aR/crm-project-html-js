import * as model from './../model.js'
import * as view from './edit.view.js'


function init() {
  const id = getRequestId()
  const request = model.getRequestById(id)
  view.renderRequest(request)
  setupEventListeners()
}

function setupEventListeners() {
  view.elements.form.addEventListener('submit', formSubmitHandler)
}

function formSubmitHandler(e) {
  e.preventDefault()
  const data = view.getFormInput()
  console.log(data);
}

function getRequestId() {
  const params = new URLSearchParams(window.location.search)
  return params.get('id')
}

init()