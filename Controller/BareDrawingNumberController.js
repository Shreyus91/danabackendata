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
  
    const PageQuery = parseInt(req.query.Pages)
    const skips = (PageQuery-1)*50
    console.log(req.query)
    const data = await baredrawignoData.find().skip(skips).limit(50)
    try {
        if (data) {
            return res.status(200).json({message:"Dowell data found",data})
        }
        else {
            return res.status(400).json({message:"data not found"})
        }
    } catch (error) {
        return res.status(500).json({message:"Internal server error",error})
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



export const getBareDrawingSearch = expressAsyncHandler(async (req, res) => {
    // , , , , Bowl, Angle, VOff, VSize
    try {
        const data = await baredrawignoData.find({ $or: [{ BareDrawingNumber: { '$regex': req.query.searchQ } }, { OtoO: { '$regex': req.query.searchQ } }, { Intermediate: { '$regex': req.query.searchQ } }, { RO: { '$regex': req.query.searchQ } }, { Bowl: { '$regex': req.query.searchQ } }, { Angle: { '$regex': req.query.searchQ } }, { VOff: { '$regex': req.query.searchQ } }, { VSize: { '$regex': req.query.searchQ } }] })
        if (data) {
            return res.status(200).json({message:"data found",data})
        }
    } catch (error) {
      return res.status(404).json({message:"No data found"})
    }
  })