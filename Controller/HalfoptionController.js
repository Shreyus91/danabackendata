import expressAsyncHandler from "express-async-handler";
import halfoptionData from "../Models/HalfOptionModel.js";


// post halfoption data
export const HalfoptionControllerCreate = expressAsyncHandler(async (req, res) => {
    const { HalfOption, Wall } = req.body.data
    
    try {
        
        const data = await new halfoptionData({ HalfOption, Wall })
        
        if (data) {
            await data.save((error, response) => {
                if (error) {
                    return res.status(400).json({message:"Error to create",error})
                }
                if (response) {
                    return res.status(201).json({message:"Halfoption data created Successfully",data})
                }
            })
        }


    } catch (error) {
        res.status(500).json({message:"internal server error",error})
    }

})

// read halfoption data
export const HalfoptionControllerRead = expressAsyncHandler(async (req, res) => {
  try {
    const data = await halfoptionData.find({})

    if (data) {
        return res.status(200).json({ message: "halfoption data read successfully", data })
        
      }
      return res.status(400).json({message:"unable to find halfoptionData"})
  } catch (error) {
      return res.status(500).json({message:"internal server error" , error})
  }
})

// update half option data

export const HalfoptionControllerUpdate = expressAsyncHandler(async (req, res) => {
    try {
const {id,HalfOption,Wall} = await req.body.data
        if (id) {
            const updateddata = await halfoptionData.findByIdAndUpdate(id, {HalfOption,Wall}, { new: true })
            
            if (updateddata) {
                return res.status(201).json({message:'halfoption data updated successfully',data:updateddata})
            }
        }
        return res.status(400).json({message:"No id found to update data"})
    } catch (error) {

        return res.status(500).json({message:"internal server error",error})
        
    }
}) 

// controller to delete halfoption data

export const HalfoptionControllerDelete = expressAsyncHandler(async (req, res) => {
    try {
        const deleteid = await req.body.id
        console.log(req.body)
        const deletedata = await halfoptionData.findByIdAndDelete(deleteid)

        if (deletedata) {
            return res.status(200).json({message:"half option data deleted successfully",data:deletedata})
        }
        else {
            return   res.status(400).json({message:"data id not found to delete"})
            }
     

    } catch (error) {
        return res.status(500).json({message:"internal server error",error})
    }
})

// Read single option data

export const HalfOptionControllerSingle = expressAsyncHandler(async (req, res) => {
    const singleId = req.params.id

   try {
    if (singleId) {
        const data = await halfoptionData.findById(singleId)

        if (data) {
            return res.status(200).json({message:"single data found",data})
        }
        else {
            return res.status(404).json({message:"data not found with this Id"})
        }
    }

   } catch (error) {
       return res.status(500).json({message:"Internnal server error",error})
   }

})


export const getHalfoptionSearch = expressAsyncHandler(async (req, res) => {
    try {
        const data = await halfoptionData.find({ $or: [{ HalfOption: { '$regex': req.query.searchQ } }, { Wall: { '$regex': req.query.searchQ } }] })
        if (data) {
            return res.status(200).json({message:"data found",data})
        }
    } catch (error) {
      return res.status(404).json({message:"No data found"})
    }
  })