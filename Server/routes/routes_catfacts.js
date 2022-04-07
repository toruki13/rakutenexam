'use strict';

import { Router } from 'express';
import { getCats } from '../controllers/cats.js';
import handler from '../controllers/handlers/catfactsHandler.js';

const route = Router({
  /*   caseSensitive: true */
});

route.get('/fromSource', getCats);

export default route;

