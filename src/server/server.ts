
import http from 'http';
import { AddressInfo } from 'net';
import app from './app';
import { postgresClient } from '@database';

const port = process.env.PORT || 3000;

const server = http.createServer(app);



const onListening = () => {
  const address = server.address() as AddressInfo;
  console.log(`Server started and listening on port ${address.port}`);
};

// initializeDBConnection().then(({ error, success }) => {
//   error ? console.log(error) : console.log(success);
// });

postgresClient.connect().then((data) => {
  console.log('postgres database connected successfully');
}).catch(err => {
  console.log(err);
});

server.listen(port);
server.on('error', () => console.log('error occured during connection'));
server.on('listening', onListening);
