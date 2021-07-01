import 'reflect-metadata';
import express from 'express'

import './database/connect';

import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

export { app };