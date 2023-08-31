import { faker } from '@faker-js/faker'

faker.locale = 'es'

export function generateProduct() {
  return {
    nombre: faker.commerce.productName(),
    descripcion: faker.commerce.productDescription(),
    precio: faker.commerce.price(100, 1000, 2, '$'),
  }
}
