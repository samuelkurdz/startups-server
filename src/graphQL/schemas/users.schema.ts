export const userQuerySchema = `
  type User {
    id: Int!
    user_name: String!
    first_name: String!
    last_name: String!
    password: String!
  }

  type Mutation {
    createUser(name: String): User
  }

  type Query {
    users: [User]
    user(id: Int!): User
  }

`;