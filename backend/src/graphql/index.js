import { graphqlHTTP } from 'express-graphql'
import { resolvers } from './resolvers.js'
import typeDefs from './schema.js'

export default function graphqlConfig() {
  return graphqlHTTP({
    schema: typeDefs,
    rootValue: resolvers,
    graphiql: true
  })
}