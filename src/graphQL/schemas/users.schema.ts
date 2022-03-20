export const userQuerySchema = `
  type User {
    id: String
    email: String
    user_name: String
    first_name: String
    last_name: String
  }

  type ResponsePayload {
    message: String
    status: String
    data: [String]
  }

  input NewUser {
    email: String!
    user_name: String!
    first_name: String!
    last_name: String!
    password: String!
  }

  type Query {
    users: [User]
    user(email: String!): User
  }

  type Mutation {
    newUser(payload: NewUser): ResponsePayload
  }

`;