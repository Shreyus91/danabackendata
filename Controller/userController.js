import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import userData from "../Models/UserModel.js";
import jwt from 'jsonwebtoken'
export const userRegisterController = expressAsyncHandler(async (req, res) => {
  const { username, password, isAdmin } = req.body;
  
    try {
        const newPassword = await bcrypt.hash(password, 10)
        
        await userData.create({ username, password: newPassword, isAdmin })
        
        return res.status(201).json({message:"user created"})
        
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"})
    }
});

// login controller

export const LoginController = expressAsyncHandler(async (req, res) => {
    console.log(req.body)
    const { username, password } = req.body.username
    
    const user = await userData.findOne({ username })
    const isPasswordValid = await bcrypt.compare(password,user.password)
        
       
        if (isPasswordValid) {
            const token = jwt.sign({
                name:user.name
            }, 'secretdanaqsolvekey')
            return res.status(200).json({message:"user found",token,isAdmin:user.isAdmin})
    }
        else {
            return res.status(400).json({message:"Invalid Password"})
    }
    
        
    
})
