import expressAsyncHandler from "express-async-handler";
import tracktableData from "../Models/TrackTableModel.js";


// create tractabledata controller

export const TracktableControllersCreate = expressAsyncHandler(async (req, res) => {
    const { Track, OtoO, OAII } = req.body.data
    
    try {
        const TrackDatas = new tracktableData({Track,OtoO,OAII});
        
        if (TrackDatas) {
            await TrackDatas.save((error, response) => {
                if (error) {
                   return res.status(400).json({message:"Some error ocuucred",error})
                }
                if (response) {
                   return res.status(201).json({message:" tracktable data created successfully",data:TrackDatas})
                }
            })
        }
    } catch (error) {
       return res.status(500).json({error})
    }
})

// read tracktabledata controller

export const TrackTableControllerRead = expressAsyncHandler(async (req, res) => {
    const PageQuery = parseInt(req.query.Page)
    const skips = (PageQuery-1)*50
    console.log(skips)
    const data = await tracktableData.find().skip(skips).limit(50)
    try {
        if (data) {
            return res.status(200).json({message:"Track data found",data})
        }
        else {
            return res.status(400).json({message:"data not found"})
        }
    } catch (error) {
        return res.status(500).json({message:"Internal server error",error})
    }
})

// single data read

export const TrackTableControllerSingleRead = expressAsyncHandler(async (req, res) => {
    const singleid = req.params.id
console.log(singleid)
    try {
        const data = await tracktableData.findById(singleid)
        if (data) {
          return  res.status(200).json({message:"successfully found single data",data})
        }
        return   res.status(400).json({message:"No id found"})
           
    }
    catch (error) {
        res.status(500).json({error})
    }
})



// controller to update tracktable data

export const TrackTableControllerUpdate = expressAsyncHandler(async (req, res) => {
   
    try {
        const {id,Track,OtoO,OAII} = await req.body.data
        
        if (id) {
            const data = await tracktableData.findByIdAndUpdate(id, {Track,OtoO,OAII}, { new: true })
            if(data){
                return res.status(201).json({message:"successfully updated",data})
            }
            else {
                return res.status(400).json({message:"no data found to update"})
            }
           
        }

        } catch (error) {
        res.status(500).json({error})
    }
})

// controller tpo delete tracktable data

export const trackTableDataControllerDelete = expressAsyncHandler(async (req, res) => {
    try {
    const deleteid = await req.body.id
        
        if (deleteid) {
            const data = await tracktableData.findByIdAndDelete(deleteid)
            if (data) {
                return res.status(201).json({message:"data successfully deleted",deletedata})
        }
    }
        else{
            return res.status(400).json({message:"id not found to delete data"})
             } 
}
    catch (error) {

        return res.status(500).json({ error })
        
        
    }
})

// search controller
export const getTrackSearch = expressAsyncHandler(async (req, res) => {
    try {
        const data = await tracktableData.find({ $or: [{ Track: { '$regex': req.query.searchQ } }, { OtoO: { '$regex': req.query.searchQ } }, { OAII: { '$regex': req.query.searchQ } }] })
        if (data) {
            return res.status(200).json({message:"data found",data})
        }
    } catch (error) {
      return res.status(404).json({message:"No data found"})
    }
  })

