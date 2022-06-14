import expressAsyncHandler from "express-async-handler";
import brkflgoptionData from "../Models/BrkFlgOptionModel.js";


// post data from break flange option


export const PostBrkFlgOption = expressAsyncHandler(async (req, res) => {
   try {
    const { BrkFlgOption, FLOff, OD, Pilot, InOD, BCDiam, Index, Size, Num } = req.body.data
    
       const data = await new brkflgoptionData({ BrkFlgOption, FLOff, OD, Pilot, InOD, BCDiam, Index, Size, Num })
       
       if (data) {
           await data.save((error, response) => {
               if (error) {
                   return res.status(400).json({message:"data not found",error})
               }
               if (response) {
                   return res.status(201).json({message:"data created successfully",data})
               }
           })
       }

   } catch (error) {
       return res.status(500).json({message:"Internal Server Error",error})
   }
    
   
})

// get break flange option data

export const GetBrkFlgOption = expressAsyncHandler(async (req, res) => {
   
    const PageQuery = parseInt(req.query.Pages)
    const skips = (PageQuery-1)*50
    console.log(skips)
    const data = await brkflgoptionData.find().skip(skips).limit(50)
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

export const GetSingleBrkFlgOption = expressAsyncHandler(async (req,res) => {
    try {
        const singleId =  req.params.id
        if (singleId) {
            const data = await brkflgoptionData.findById(singleId)
            if (data) {
                return res.status(200).json({message:"Found Single Data",data})
            }
            else {
                return res.status(400).json({message:"not found data"})
            }
        }

    } catch (error) {
        return res.status(500).json({message:"Internal server error"})
    }
})

// update data

export const UpdateBrkFlgOption = expressAsyncHandler(async (req, res) => { 
  
    try {
        const { id,BrkFlgOption, FLOff, OD, Pilot, InOD, BCDiam, Index, Size, Num } = req.body.data

        if (id) {
            const data = await brkflgoptionData.findByIdAndUpdate(id, { BrkFlgOption, FLOff, OD, Pilot, InOD, BCDiam, Index, Size, Num }, { new: true })
            if (data) {
                return res.status(201).json({message:"data updated successfully",data})
            }
            else {
                return res.status(400).json({message:"data not found"})
            }
}


    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"})
    }
})

// delete data

export const DeleteBrkFlgOption = expressAsyncHandler(async (req, res) => {
    try {
        const deleteid = await req.body.id
        if (deleteid) {
            const data = await brkflgoptionData.findByIdAndDelete(deleteid)
            if (data) {
                
                return res.status(201).json({message:"data deleted Succesfully",data})
            }
            else {
                return res.status(400).json({message:"data not found"})
            }
        }
       
    } catch (error) {
        return res.status(500).json({message:"internal server Error"})
    }
})

export const getBrkFLgOptionSearch = expressAsyncHandler(async (req, res) => {
    try {
        const data = await brkflgoptionData.find({ $or: [{ BrkFlgOption: { '$regex': req.query.searchQ } }, { FLOff: { '$regex': req.query.searchQ } }, { OD: { '$regex': req.query.searchQ } }, { Pilot: { '$regex': req.query.searchQ } }, { InOD: { '$regex': req.query.searchQ } }, { BCDiam: { '$regex': req.query.searchQ } }, { Index: { '$regex': req.query.searchQ } }, { Size: { '$regex': req.query.searchQ } }, { Num: { '$regex': req.query.searchQ } }] })
        if (data) {
            return res.status(200).json({message:"data found",data})
        }
    } catch (error) {
      return res.status(404).json({message:"No data found"})
    }
  })