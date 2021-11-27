import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
const querySchema = buildSchema(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Query {
    getDie(numSides: Int): RandomDie
  }
`);


export default querySchema;
