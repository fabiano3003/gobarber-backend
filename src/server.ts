import 'reflect-metadata';
import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

// app.get('/', (request, response) => {
//   return response.json({ message: 'HelloW World'});
// });

app.listen(3333, () => {
  console.log('🚀️ Sever started on port 3333!');
});
