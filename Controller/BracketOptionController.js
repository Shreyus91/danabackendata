import expressAsyncHandler from "express-async-handler";
import BracketOptionData from "../Models/BracketOptionModel.js";

// post data for bracket option

export const BracketOptionControllerPost = expressAsyncHandler(async (req, res) => {
    const { BracketOption, TRod, SArm, LArm } = req.body.data
    
    try {
        const data = await new BracketOptionData({ BracketOption, TRod, SArm, LArm })

        if (data) {
            data.save((error, response) => {
                if (error) {
                    return res.status(400).json({message:"Some Error Occured"})
                }
                if(response) {
                    return res.status(201).json({message:"Data Created SuccessFully",data})
                }
            })

        }
        else {
            return res.status(404).json({message:"No data found"})
        }
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"})
    }
})

// Get All Bracket Option data

export const GetAllBracketOptionData = expressAsyncHandler(async (req, res) => {
    const PageQuery = parseInt(req.query.Pages)
    const skips = (PageQuery-1)*50
    console.log(skips)
    const data = await BracketOptionData.find().skip(skips).limit(50)
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

// get single data

export const GetSingleBracketOptionData = expressAsyncHandler(async (req, res) => {
   try {
    const singleId = req.params.id

    if (singleId) {
        const data = await BracketOptionData.findById(singleId)

        if (data) {
            return res.status(200).json({message:"Found Single data successfully",data})
        }
        else {
            return res.status(400).json({message:"data not found"})
        }
    }
   } catch (error) {
       return res.status(500).json({message:"Internal Server Error"})
   }
})

// update bracket option data

export const UpdateBracketOptionData = expressAsyncHandler(async (req, res) => {
try {
    const { id, BracketOption, TRod, SArm, LArm } = req.body.data
    const data = await BracketOptionData.findByIdAndUpdate(id, { BracketOption, TRod, SArm, LArm }, { new: true })
    
    if (data) {
        return res.status(200).json({message:"Data Updated SuccessFully",data})
    }
    else {
        return res.status(400).json({message:"data not found"})
    }
} catch (error) {
    return res.status(500).json({message:"Internal Server error"})
}    
    
})

// delete bracket option data

export const deleteBracketOptionData = expressAsyncHandler(async(req,res)=>{
    try {
        console.log(req.body.id)
        const deleteId = req.body.id
        if (deleteId) {
            const data = await BracketOptionData.findByIdAndDelete(deleteId)
            if (data) {
                return res.status(200).json({message:"delete Data successfully",data,})
            }
            else{
                return res.status(400).json({message:"Data not found"})
            }
      }  
    } catch (error) {
        return res.status(500).json({ message:"Internal Server Error"})
        
    }
})


export const getBracketoptionSearch = expressAsyncHandler(async (req, res) => {
    try {
        const data = await BracketOptionData.find({ $or: [{ BracketOption: { '$regex': req.query.searchQ } }, { TRod: { '$regex': req.query.searchQ } }, { SArm: { '$regex': req.query.searchQ } }, { LArm: { '$regex': req.query.searchQ } }] })
        if (data) {
            return res.status(200).json({message:"data found",data})
        }
    } catch (error) {
      return res.status(404).json({message:"No data found"})
    }
  })