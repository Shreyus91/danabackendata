import expressAsyncHandler from "express-async-handler";
import BuildSheetData from "../Models/BuildSheetDataModel.js";

// Post BuildSheetData data

export const BuildSheetDataPost = expressAsyncHandler(async (req, res) => {
  var axle;
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

  axle = await BuildSheetData.find({ AxleHousingPartNo }).then((res) => {
    return res;
  });
   
    console.log(axle)
    
    
  try {
    const data = await new BuildSheetData({
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

    if (data) {
      await data.save((error, response) => {
        if (error) {
          return res.status(304).json({ message: "data not created", error });
        }
        if (response) {
          return res
            .status(201)
            .json({
              message: "BuildSheetData data created successfully",
              data,
            });
        }
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
});

// get BuildSheetData data

export const BuildSheetDataGet = expressAsyncHandler(async (req, res) => {
  const data = await BuildSheetData.find({});

  try {
    if (data) {
      return res
        .status(200)
        .json({ message: "BuildSheetData data found", data });
    } else {
      return res.status(400).json({ message: "data not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
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
