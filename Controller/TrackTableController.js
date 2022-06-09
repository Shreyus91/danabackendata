import expressAsyncHandler from "express-async-handler";
import tracktableData from "../Models/TrackTableModel.js";


// create tractabledata controller

export const TracktableControllersCreate = expressAsyncHandler(async (req, res) => {
    const { track, BareDrawingNumber, OtoO, OAII } = req.body.data
    console.log(req.body)
    try {
        const TrackDatas = new tracktableData({
            Track:track,BareDrawingNumber,OtoO,OAII
        });
        
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

// read tractabledata controller

export const TrackTableControllerRead = expressAsyncHandler(async (req, res) => {
    try {
        const data = await tracktableData.find({})

        if (data) {
            res.status(200).json({message:"track Table data successfully read",data})
        }
    } catch (error) {
        res.status(500).json({error})
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

    const {id,track,BareDrawingNumber,OtoO,OAII} = await req.body.data
    console.log(req.body)
    console.log(track)
    try {
        
        if (id) {
            const updatedata = await tracktableData.findByIdAndUpdate(id, {Track:track,BareDrawingNumber,OtoO,OAII}, { new: true })
            
           return res.status(201).json({message:"successfully updated",updatedata})
        }

        return res.status(400).json({message:"no data found to update"})

    } catch (error) {
        res.status(500).json({error})
    }
})

// controller tpo delete tracktable data

export const trackTableDataControllerDelete = expressAsyncHandler(async (req, res) => {
    
    const deleteid = await req.body.data
        try {
        if (deleteid) {
            const deletedata = await tracktableData.findByIdAndDelete(deleteid)

            return res.status(201).json({message:"data successfully deleted",deletedata})
        }
        return res.status(400).json({message:"id not found to delete data"})
    } catch (error) {

        return res.status(500).json({ error })
        
        
    }
})

