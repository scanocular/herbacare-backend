import klinikService from "../service/klinikService.js";

const createKlinik = async (req, res, next) => {
  try {
    const result = await klinikService.createKlinikService(req);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const klinikLogin = async (req, res, next) => {
  try {
    const result = await klinikService.loginKlinik(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getAllKlinik = async (req, res, next) => {
  try {
    const result = await klinikService.getAllKlinik(req);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getKlinikDetail = async (req, res, next) => {
  try {
    const result = await klinikService.getKlinikDetailService(req);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { createKlinik, klinikLogin, getAllKlinik, getKlinikDetail };