export const userQuerySchema = `
  type User {
    id: String!
    user_name: String!
    first_name: String!
    last_name: String!
    email: String!
  }

  type Mutation {
    createUser(name: String): User
  }

  type Query {
    users: [User]
    user(email: String!): User
  }

`;