export const userQuerySchema = `
  type User {
    id: String
    email: String
    user_name: String
    first_name: String
    last_name: String
  }
  

  type GetUsersResponse {
    message: String
    status: String
    data: [User]
  }

  type GetSingleUserResponse {
    message: String
    status: String
    data: User
  }

  type CreateUserRsponsePayload {
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
    users: GetUsersResponse
    user(email: String!): GetSingleUserResponse
  }

  type Mutation {
    newUser(payload: NewUser): CreateUserRsponsePayload
  }

`;