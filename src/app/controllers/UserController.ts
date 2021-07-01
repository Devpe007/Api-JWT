import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../models/User'; 

class UserController {
    async store(request: Request, response: Response) {
        const repository = getRepository(User);
        
        const { email, password } = request.body;

        const userAlreadyExists = await repository.findOne({
            email,
        });

        if(userAlreadyExists) {
            return response.sendStatus(409);
        };

        const user = repository.create({
            email,
            password,
        });

        await repository.save(user);

        return response.json(user);
    };
};

export { UserController };