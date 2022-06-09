import expressAsyncHandler from "express-async-handler";
import absData from "../Models/ABSModel.js";


// post create Baredrawing Number
export const PostabsData = expressAsyncHandler(async (req,res) => {
    try {
        const { ABS, BareDrawingNumber, Block, BlIndex, SOFf} = req.body.data
    
    const data = await new absData({ ABS, BareDrawingNumber, Block, BlIndex, SOFf})
    
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

export const GetAllabsData = expressAsyncHandler(async (req, res) => {
    try {
        const data = await absData.find({})
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

export const GetSingleAbsData = expressAsyncHandler(async (req, res) => {
    try {
        const singleId = req.params.id
        const data = await absData.findById(singleId)
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

export const UpdateabsDataData = expressAsyncHandler(async(req,res)=>{
    try {
        const { id, ABS, BareDrawingNumber, Block, BlIndex, SOFf } = req.body.data
    
    if (id) {
        const data = await absData.findByIdAndUpdate(id, { ABS, BareDrawingNumber, Block, BlIndex, SOFf}, { new: true })
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

export const DeleteabsDataData = expressAsyncHandler(async (req, res) => {
    try {
        const deleteId = req.body.id
        if (deleteId) {
            const data = await absData.findByIdAndDelete(deleteId)

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