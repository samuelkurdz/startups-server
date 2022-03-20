import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';

import { schemas } from '@graphql/schemas'
import { resolvers } from '@graphql/resolvers';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema: schemas,
  rootValue: resolvers,
  graphiql: true,
}));

app.use('/', async (req, res) => {
  res.send('Welcome to my API');
});

export default app;
