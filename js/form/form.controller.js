import getRandomData from './form.test-data.js'
import * as view from './form.view.js'

function init() {
  renderTestData()
  setupEventListeners()
}

function setupEventListeners() {
  view.elements.form.addEventListener('submit', formSubmitHandler)
}

function renderTestData() {
  const randomData = getRandomData()
  view.insertTestData(randomData)
}

function formSubmitHandler(e) {
  e.preventDefault()
  const formData = view.getFormInput()
  console.log(formData);
}

init()