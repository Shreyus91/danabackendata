import expressAsyncHandler from "express-async-handler";
import DowelData from "../Models/DowelModel.js";

// Post Dowell data


export const DowellPost = expressAsyncHandler(async (req, res) => {
    console.log(req.body)
    
    const { Dowel, DowelPN, FTOff, Spacing } = req.body.data
    
    try {
        const data = await new DowelData({Dowel, DowelPN, FTOff, Spacing})

        if (data) {
            await data.save((error, response) => {
                if (error) {
                    return res.status(304).json({message:"data not created",error})
                }
                if (response) {
                    return res.status(201).json({message:"Dowell data created successfully",data})
                }
            })
        }

    } catch (error) {
        return res.status(500).json({message:"Internal server error",error})
    }

})

// get Dowell data

export const DowellGet = expressAsyncHandler(async (req, res) => {
    const data = await DowelData.find({})

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

// read single data dowell

export const DowellGetSingle = expressAsyncHandler(async (req,res) => {
    const singleid = req.params.id
    try {
        if (singleid) {
            const data = await DowelData.findById(singleid)
            if (data) {
                return res.status(200).json({message:"Dowell single data found",data})
            }
            else {
                return res.status(400).json({message:"Single data not found"})
            }
        }
    } catch (error) {
        return res.status(500).json({message:'Internal Server Error',error})
    }
})

// update dowell data

export const DowellUpdate = expressAsyncHandler(async (req, res) => {
    try {
        const { id,Dowel, DowelPN, FTOff, Spacing } = req.body.data
        if (id) {
            const data = await DowelData.findByIdAndUpdate(id, { Dowel, DowelPN, FTOff, Spacing },{new:true})
            if (data) {
                return res.status(201).json({message:"Data UPdated",data})
            }
            else {
                return res.status(400).json({message:"Data not found"})
            }
        }
        
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error",error})
    } 
})

// delete dowell data controller

export const DowellDelete = expressAsyncHandler(async (req, res) => {
   try {
    const deleteid = await req.body.id
    if (deleteid) {
        const data = await DowelData.findByIdAndDelete(deleteid)
        if (data) {
            return res.status(200).json({ message: "data deleted successfully", data })
            
        }
        else {
            return res.status(400).json({message:"data not found"})
        }

    }
   } catch (error) {
       return res.status(500).json({message:'Internal Server Error',error})
   }
})