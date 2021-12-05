import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
const querySchema = buildSchema(`
  type StartUp {
    id: Int!
    name: String!
    overview: String
    lastRound: String
    lastAmountRaised: Int
    totalAmountRaised: Int
    founded: String
    founders: [String]
    industry: String
  }
  input StartUpInput {
    name: String
    overview: String
    lastRound: String
    lastAmountRaised: Int
    totalAmountRaised: Int
    founded: String
    founders: [String]
    industry: String
  }

  type NotFoundStartUp {
    id: Int
    message: String
  }

  type Mutation {
    createStartup(name: String): StartUp
    updateStartup(id: Int!, data: StartUpInput): StartUp
  }

  type Query {
    startups: [StartUp]
    startup(id: Int!): StartUp
  }
`);


export default querySchema;
