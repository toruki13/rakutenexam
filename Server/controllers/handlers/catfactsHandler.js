'use strict';

import fetch from 'node-fetch';
import config from '../../config.js';

const options = {
  compress: true,
  timeout: 60e3, // 60s timeout as default
  follow: 0,
  headers: {
    'content-type': 'application/json',
  },
};

const paths = { facts: '/facts' };

const functions = {
  getListFromAPI: async function () {
    const res = await fetch(`${config.source.url}${paths.facts}`, options)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log('Some error!');
        throw err;
      });

    return res;
  },
  postDB: async function () {
    
    //TODO query to iterate through the res object and create the values in the table

  }
};

export default functions;

