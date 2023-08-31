import { buildSchema } from 'graphql'

const typeDefs = buildSchema(`
  type Query {
    getAllProducts: [Producto]
    getProductById(id: ID!): Producto
  }

  type Mutation {
    createProduct(newProduct: ProductoInput!): Producto
    deleteProduct(id: ID!): ResponseStatus
    updateProduct(id: ID!, newProduct: ProductUpdateInput): Producto
  }

  input ProductUpdateInput {
    nombre: String
    descripcion: String
    codigo: String
    foto: String
    precio: String
    stock: String
  }

  input ProductoInput {
    nombre: String
    descripcion: String
    codigo: String
    foto: String
    precio: String
    stock: String
  }

  type ResponseStatus {
    status: String
  }

  type Producto {
    id: ID
    nombre: String
    descripcion: String
    codigo: String
    foto: String
    precio: String
    stock: String
    createdAt: String
  }
`)

export default typeDefs