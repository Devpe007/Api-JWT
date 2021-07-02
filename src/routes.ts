import { Router } from 'express';

import { UserController } from './app/controllers/UserController';
import { AuthController } from './app/controllers/AuthController';

const userController = new UserController();
const authController = new AuthController();

const routes = Router();

routes.post('/users', userController.store);
routes.post('/authenticate', authController.authenticate);

export { routes };