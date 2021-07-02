import { Router } from 'express';

import { UserController } from './app/controllers/UserController';
import { AuthController } from './app/controllers/AuthController';

import { authMilddleware } from './app/middlewares/authMiddleware';

const userController = new UserController();
const authController = new AuthController();

const routes = Router();

routes.post('/users', userController.store);
routes.post('/authenticate', authController.authenticate);

routes.get('/users', authMilddleware, userController.index);

export { routes };