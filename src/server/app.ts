import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';

import { schemas } from '@graphql/schemas'
import { resolvers } from '@graphql/resolvers';
import { isUserAuthenticated } from '@middlewares';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(isUserAuthenticated);

app.use('/graphql', graphqlHTTP(req => ({
  schema: schemas,
  rootValue: resolvers,
  graphiql: true,
  context: {
    user: req
  }
})));

// app.use('/graphql', graphqlHTTP({
//   schema: schemas,
//   rootValue: resolvers,
//   graphiql: true,
// }));

app.use('/', async (req, res, next) => {
  res.send('Welcome to my API');
});

export default app;
