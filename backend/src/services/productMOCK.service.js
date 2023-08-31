import { generateProduct } from '../utils/products.mock.js'

class ProductService {
  constructor() {
    this.products = []
  }

  async createProducts() {
    for (let i = 0; i < 5; i++) {
      const product = generateProduct()
      product.id = i + 1

      this.products.push(product)
    }

    return this.products.slice(0, 5)
  }
}

export { ProductService }
