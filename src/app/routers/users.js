import { Router } from 'express';
import UsersControllers from '../controllers/UserControler';

const routes = new Router();
routes.get('/user', UsersControllers.index);
routes.get('/user/:id', UsersControllers.show);
routes.post('/user', UsersControllers.store);
routes.put('/user/id', UsersControllers.update);
routes.delete('/user/:id', UsersControllers.delete);

export default routes;
