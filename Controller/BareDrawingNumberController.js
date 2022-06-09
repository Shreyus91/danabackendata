import expressAsyncHandler from "express-async-handler";
import baredrawignoData from "../Models/BareDrawingNumberModel.js";


// post create Baredrawing Number
export const PostBareDrawingNumber = expressAsyncHandler(async (req,res) => {
    try {
        const { BareDrawingNumber, OtoO, Intermediate, RO, Bowl, Angle, VOff, VSize } = req.body.data
    
    const data = await new baredrawignoData({ BareDrawingNumber, OtoO, Intermediate, RO, Bowl, Angle, VOff, VSize })
    
    if (data) {
        await data.save((error, response) => {
            if (response) {
                return res.status(201).json({message:"Data Created Successfully",data})
            }
            if (error) {
                return res.status(400).json({message:"Data Not Found"})
            }
        })
    }
    else {
        return res.status(400).json({message:"Data Not Found"})
    }

    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"})
    }

})

// get all data successfully

export const GetAllBareDrawingNumber = expressAsyncHandler(async (req, res) => {
    try {
        const data = await baredrawignoData.find({})
        if (data) {
            return res.status(200).json({message:"Data found Successfully",data})
        }
        else {
            return res.status(400).json({message:"Data not found"})
        }
    } catch (error) {

        return res.status(500).json({message:"Internal Server Error"})
        
    }
})

// get single baredrawing number data

export const GetSingleBareDrawingData = expressAsyncHandler(async (req, res) => {
    try {
        const singleId = req.params.id
        const data = await baredrawignoData.findById(singleId)
        if (data) {
            return res.status(200).json({message:"Data Found Succefully",data})
        }
        else {
            return res.status(400).json({message:"Data Not Found"})
        }
    } catch (error) {

        return res.status(500).json({message:"Internal Server Error"})
        
    }
})

// update bare drawingNumber Data

export const UpdateBareDrawingNumberData = expressAsyncHandler(async(req,res)=>{
    try {
        const { id, BareDrawingNumber, OtoO, Intermediate, RO, Bowl, Angle, VOff, VSize } = req.body.data
    
    if (id) {
        const data = await baredrawignoData.findByIdAndUpdate(id, { BareDrawingNumber, OtoO, Intermediate, RO, Bowl, Angle, VOff, VSize }, { new: true })
        if (data) {
            return res.status(201).json({message:"Data Updated Successfully",data})
        }
        else {
            return res.status(400).json({message:"data not found to update"})
        }

    }
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"})
    }
})

// delete bare drawing number data

export const DeleteBareDrawingNumberData = expressAsyncHandler(async (req, res) => {
    try {
        const deleteId = req.body.id
        if (deleteId) {
            const data = await baredrawignoData.findByIdAndDelete(deleteId)

            if (data) {
                return res.status(201).json({ message:
"data deleted successfully",data})
            }
            else {
                return res.status(400).json({message:"data not found"})
            }
        }
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"})
    }
})