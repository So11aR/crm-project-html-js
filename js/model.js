let requests = []

class Request {
  constructor(id, name, phone, email, product) {
    this.id = id
    this.name = name
    this.phone = phone
    this.email = email
    this.product = product
    this.date = new Date().toISOString()
    this.status = 'new'
  }
}

function addRequest(formData) {
  // Определяем ID
  const id = requests.length > 0 ? requests[requests.length - 1]['id'] + 1 : 0

  // Создаем заявку
  const request = new Request(id, formData.get('name'), formData.get('phone'), formData.get('email'), formData.get('product'))

  requests.push(request)

  console.log(request);
}

export {addRequest}