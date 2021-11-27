import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import querySchema from '../graphQL/schemas';
import resolvers from '../graphQL/resolvers';


// The root provides a resolver function for each API endpoint


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema: querySchema,
  rootValue: resolvers,
  graphiql: true,
}));

app.use('/', (req, res) => {
  res.send('Nothing to see here. Move on');
});

export default app;


