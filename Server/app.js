import express from 'express';
import bodyParser from 'body-parser';
import config from './config.js';
import Morgan from 'morgan';
import Cors from 'cors'


import routes from './routes/index.js';

import { get500, get404 } from './controllers/errorsController.js';

//create db
import { clientDB } from './db.js';

// Set up the express app
const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CORS
app.use(Cors())
//logging for dev purposes
app.use(Morgan('tiny'));

// Require our routes into the application.
app.use('/', routes);

app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
  })
);

//error handling
app.use('/500', get500);

app.use((error, req, res, next) => {
  res.redirect('/500');
});

const port = config.service.port || 3000;

clientDB
  .connect()
  .then(() => {
    console.log('DB connected!');
    app.listen(port, 'localhost', () => {
      console.log(`Listening: http://localhost:${port}`); //this feels better, easy to ready and informative when running
    });
  })
  .catch((err) => console.log(err));
// Server listen to port

export default app;

