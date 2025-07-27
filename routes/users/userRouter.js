import express from 'express';
import { register } from '../../controllers/users/usersController.js';


const userRouter=express.Router();

userRouter.post('/api/v1/users/register', register);

export default userRouter;