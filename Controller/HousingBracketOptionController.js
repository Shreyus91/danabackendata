import expressAsyncHandler from 'express-async-handler'
import hboptionData from '../Models/HousingBracketOptionModel.js'


// create housing bracket option data controller

export const housingBracketOptionControllerCreate = expressAsyncHandler(async (req, res) => {
    try {
        const {PartNo,BracketOption} = req.body

       
            const hbOption = new hboptionData({PartNo,BracketOption})
        if(hbOption){
            await hbOption.save((errors,response)=>{
                if(errors){
                    return res.status(400).json({message:"some error occured",error:errors})
                }
                if(response){
                    return res.status(201).json({message:"housing bracket option data created", data:hbOption })
                }
            })
        }
        
    } catch (error) {
        console.log(error)
    }

})

// read housing bracket option data 

export const housingBracketOptionControllerRead = expressAsyncHandler(async(req,res)=>{
    try {
        const data = await hboptionData.find({})

        if(data){
            return res.status(200).json({message:"Getting All housing Bracket option data",meta:data})
        }

        return res.status(400).json({error:"data not found"})

    } catch (error) {
        return res.status(500).json({message:"some error occured",error})
    }
})

// get single data from housing option braket data individual Id

export const housingBracketOptionControllerSingle = expressAsyncHandler(async (req,res)=>{
    try {
        const singleId = req.params.id

        if(singleId){
            const data = await hboptionData.findById(singleId)
            if(data){
                return res.status(200).json({message:"Single data found",data})
            }
            return res.status(400).json({message:"data not found with this id"})
        }

        
        
    } catch (error) {
     return res.status(500).json({message:"Internal server error",error})   
    }
})

// update data from id

export const housingBracketOptionControllerUpdate = expressAsyncHandler(async(req,res)=>{
    const {id,PartNo,BracketOption} = req.body.data
    
    try {
        if(id){
            const updatedData = await hboptionData.findByIdAndUpdate(id,{PartNo,BracketOption},{new:true})

            if(updatedData){
                return res.status(200).json({message:"Successfully updated data",data:updatedData})
            }

            return res.status(400).json({message:"No Data found for update"})
        }


    } catch (error) {
        return res.status({message:"Internal Server Error",error})
    }
})

// delete data 

export const housingBracketOptionControllerDelete = expressAsyncHandler(async(req,res)=>{
   try {
    const id = req.body.id
    if(id){
        const deleteData = await hboptionData.findByIdAndDelete(id)

        if(deleteData){
            return res.status(200).json({message:"Data Deleted Successfully",data:deleteData})
        }
        return res.status(400).json({message:"No id found to delete data"})
    }
   } catch (error) {
       return res.status(500).json({message:"Internal Server Error"})
   }



})



export const getHousingSearch = expressAsyncHandler(async (req, res) => {
    try {
        const data = await hboptionData.find({ $or: [{ PartNo: { '$regex': req.query.searchQ } }, { BracketOption: { '$regex': req.query.searchQ } }] })
        if (data) {
            return res.status(200).json({message:"data found",data})
        }
    } catch (error) {
      return res.status(404).json({message:"No data found"})
    }
  })