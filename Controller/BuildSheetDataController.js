import expressAsyncHandler from "express-async-handler";
import BuildSheetData from "../Models/BuildSheetDataModel.js";

// Post BuildSheetData data

export const BuildSheetDataPost = expressAsyncHandler(async (req, res) => {
  const {
    AxleHousingPartNo,
    ServiceHousing,
    Model,
    OriginalWorkOrder,
    BareHousingDrawingNumber,
    HousingHalfOption,
    BrakeFlangeOption,
    TrackWidth,
    AbsOption,
    DiffLockOption,
    InductionHardeningOption,
    DowellPinOption,
    VentHoleOption,
    BracketDrawingNumber,
    BracketOption,
    Comments,
    RevWO,
    Rev,
    Description,
    RevBy,
    ChkBy,
    RevDate,
  } = req.body.data;

  
    
  try {
    await  BuildSheetData.create({
      AxleHousingPartNo,
      ServiceHousing,
      Model,
      OriginalWorkOrder,
      BareHousingDrawingNumber,
      HousingHalfOption,
      BrakeFlangeOption,
      TrackWidth,
      AbsOption,
      DiffLockOption,
      InductionHardeningOption,
      DowellPinOption,
      VentHoleOption,
      BracketDrawingNumber,
      BracketOption,
      Comments,
      RevWO,
      Rev,
      Description,
      RevBy,
      ChkBy,
      RevDate,
    });

   res.status(201).json({message:"data created Successfully",data:{
    AxleHousingPartNo,
    ServiceHousing,
    Model,
    OriginalWorkOrder,
    BareHousingDrawingNumber,
    HousingHalfOption,
    BrakeFlangeOption,
    TrackWidth,
    AbsOption,
    DiffLockOption,
    InductionHardeningOption,
    DowellPinOption,
    VentHoleOption,
    BracketDrawingNumber,
    BracketOption,
    Comments,
    RevWO,
    Rev,
    Description,
    RevBy,
    ChkBy,
    RevDate,
  }})
    
  } catch (error) {
    return res.status(204).json({ message: "Part Number already exists", error });
  }
});

// get BuildSheetData data

export const BuildSheetDataGet = expressAsyncHandler(async (req, res) => {
  

  const PageQuery = parseInt(req.query.Page)
    const skips = (PageQuery-1)*50
    console.log(skips)
    const data = await BuildSheetData.find().skip(skips).limit(50)
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
});

// read single data BuildSheetData

export const BuildSheetDataGetSingle = expressAsyncHandler(async (req, res) => {
  const singleid = req.params.id;
  try {
    if (singleid) {
      const data = await BuildSheetData.findById(singleid);
      if (data) {
        return res
          .status(200)
          .json({ message: "BuildSheetData single data found", data });
      } else {
        return res.status(400).json({ message: "Single data not found" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
});

// update BuildSheetData data

export const BuildSheetDataUpdate = expressAsyncHandler(async (req, res) => {
  try {
    const {
      id,
      AxleHousingPartNo,
      ServiceHousing,
      Model,
      OriginalWorkOrder,
      BareHousingDrawingNumber,
      HousingHalfOption,
      BrakeFlangeOption,
      TrackWidth,
      AbsOption,
      DiffLockOption,
      InductionHardeningOption,
      DowellPinOption,
      VentHoleOption,
      BracketDrawingNumber,
      BracketOption,
      Comments,
      RevWO,
      Rev,
      Description,
      RevBy,
      ChkBy,
      RevDate,
    } = req.body.data;
    if (id) {
      const data = await BuildSheetData.findByIdAndUpdate(
        id,
        {
          AxleHousingPartNo,
          ServiceHousing,
          Model,
          OriginalWorkOrder,
          BareHousingDrawingNumber,
          HousingHalfOption,
          BrakeFlangeOption,
          TrackWidth,
          AbsOption,
          DiffLockOption,
          InductionHardeningOption,
          DowellPinOption,
          VentHoleOption,
          BracketDrawingNumber,
          BracketOption,
          Comments,
          RevWO,
          Rev,
          Description,
          RevBy,
          ChkBy,
          RevDate,
        },
        { new: true }
      );
      if (data) {
        return res.status(201).json({ message: "Data UPdated", data });
      } else {
        return res.status(400).json({ message: "Data not found" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
});

// delete BuildSheetData data controller

export const BuildSheetDataDelete = expressAsyncHandler(async (req, res) => {
  try {
    const deleteid = await req.body.id;
    if (deleteid) {
      const data = await BuildSheetData.findByIdAndDelete(deleteid);
      if (data) {
        return res
          .status(200)
          .json({ message: "data deleted successfully", data });
      } else {
        return res.status(400).json({ message: "data not found" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
});


export const getBuildSearch = expressAsyncHandler(async (req, res) => {
  try {
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,
    // ,

      const data = await BuildSheetData.find({ $or: [{ AxleHousingPartNo: { '$regex': req.query.searchQ } }, { ServiceHousing: { '$regex': req.query.searchQ } }, { Model: { '$regex': req.query.searchQ } }, { OriginalWorkOrder: { '$regex': req.query.searchQ } }, { BareHousingDrawingNumber: { '$regex': req.query.searchQ } }, { HousingHalfOption: { '$regex': req.query.searchQ } }, { BrakeFlangeOption: { '$regex': req.query.searchQ } }, { TrackWidth: { '$regex': req.query.searchQ } }, { AbsOption: { '$regex': req.query.searchQ } }, { DiffLockOption: { '$regex': req.query.searchQ } }, { InductionHardeningOption: { '$regex': req.query.searchQ } }, { DowellPinOption: { '$regex': req.query.searchQ } }, { VentHoleOption: { '$regex': req.query.searchQ } }, { BracketDrawingNumber: { '$regex': req.query.searchQ } }, { BracketOption: { '$regex': req.query.searchQ } }, { Comments: { '$regex': req.query.searchQ } }, { RevWO: { '$regex': req.query.searchQ } }, { Rev: { '$regex': req.query.searchQ } }, { Description: { '$regex': req.query.searchQ } }, { RevBy: { '$regex': req.query.searchQ } }, { ChkBy: { '$regex': req.query.searchQ } }, { RevDate: { '$regex': req.query.searchQ } }] })
      if (data) {
          return res.status(200).json({message:"data found",data})
      }
  } catch (error) {
    return res.status(404).json({message:"No data found"})
  }
})
