import express from 'express'
import { LoginController, userRegisterController } from '../Controller/userController.js'

const userRouter = express.Router()

// register router

userRouter.post('/register', userRegisterController)

// login router

userRouter.post('/login',LoginController)

export default userRouter