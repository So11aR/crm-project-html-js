class ExampleItem {
  constructor (name, phone, email, product) {
    this.name = name
    this.phone = phone
    this.email = email
    this.product = product
  }
}

const testData = [
  new ExampleItem('Сергей Спиридонов', parseInt('+79286641512'), 's.spiridonovv@mail.ru', 'course-js'),
  new ExampleItem('Анна Спиридонова', parseInt('+79184162677'), 'spiridonova.anna@mail.ru', 'course-vue'),
  new ExampleItem('Инга Спиридонова', parseInt('+79080453824'), 'klever.inga@mail.ru', 'course-wordpress'),
  new ExampleItem('Игорь Спиридонов', parseInt('+79227532072'), 'igor.spiridonov@mail.ru', 'course-php'),
  new ExampleItem('Ирина Голышева', parseInt('+79186387130'), 'irina.golysheva@mail.ru', 'course-html')
]

function getRandomIndex(max) {
  return Math.floor(Math.random() * max)
}

export default function getRandomData() {
  const index = getRandomIndex(testData.length)
  return testData[index]
}