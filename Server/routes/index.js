'use strict';

import { Router } from 'express';

import route from './routes_catfacts.js';

let rootRouter = Router();

//added /cats to follow standards
rootRouter.use('/cats', route);

export default rootRouter;

