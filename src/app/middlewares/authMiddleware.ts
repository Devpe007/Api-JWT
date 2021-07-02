import { Request, Response, NextFunction } from "express";

import jwt from 'jsonwebtoken';

interface ITokenPayload {
    id: string;
    iat: number;
    exp: number;
};

export function authMilddleware(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if(!authorization) {
        return response.sendStatus(401);
    };

    const token = authorization.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, 'secret');
        
        const { id } = data as ITokenPayload;

        request.userId = id;

        return next();
    } catch {
        return response.sendStatus(401);
    };
};