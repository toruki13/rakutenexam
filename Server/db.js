import './loadenv.js';
import pgtools from 'pgtools';
import pg from 'pg';

const { Pool } = pg;

export const clientDB = new Pool({
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
  max: 10, // set pool max size to 20
});


//TODO  create DB function
/* const config = {
  user: process.env.DB_USERNAME,
  host: 'localhost',
  password: process.env.DB_PASSWORD,
  port: 5432,
};

export const createDB = pgtools.createdb(
  config,
  process.env.DB_DATABASE,
  function (err, res) {
    if (err) {
      console.error(err);
      process.exit(-1);
    }
    console.log(res);
  }
);
 */
