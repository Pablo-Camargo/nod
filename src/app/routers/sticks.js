import { Router } from 'express';
import SticksControllers from '../controllers/SticksControllers';

const routes = new Router();
routes.get('/stick', SticksControllers.index);
routes.get('/stick/:user_id/sticks', SticksControllers.show);
routes.post('/stick/:user_id/sticks', SticksControllers.store);
routes.put('/stick/id', SticksControllers.update);
routes.delete('/stick/:id', SticksControllers.delete);

export default routes;
