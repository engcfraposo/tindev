import { Router } from 'express';

import DevController from './controllers/DevController'
import LikeController from './controllers/LikeController'
import DislikeController from './controllers/DislikeController'

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:DevId/likes', LikeController.store);
routes.post('/devs/:DevId/dislikes', DislikeController.store);


export default routes;
