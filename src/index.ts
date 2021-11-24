import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelopes!');
});

app.listen(port, () => console.log(`server is listening on ${port}`));