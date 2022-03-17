import { Request, Response } from 'express';

import { Wilder, IWilder } from '../model/wilder-schema';

const createError = require('http-errors');

const getAll = async (req: Request, res: Response) => {
  try {
    //   reqIsCorrect(req);
    const result: IWilder[] = await Wilder.find();
    res.json({ success: true, result });
  } catch (err: any) {
    res.json({ success: false, err: err.message });
  }
};

// TODO utilisation de next ?
const getOne = async (req: Request, res: Response) => {
  try {
    const result: IWilder | null = await Wilder.findOne({ _id: req.params.id });
    if (!result) throw createError(404, 'Utilisateur introuvable');
    res.json({ success: true, result });
  } catch (err: any) {
    res.json({ success: false, err: err.message });
  }
};

const createOne = async (req: Request, res: Response) => {
  try {
    //   reqIsCorrect(req);
    const wilder: IWilder = new Wilder(req.body);
    const result = await wilder.save();
    res.json({ success: true, result });
  } catch (err: any) {
    res.json({ success: false, err: err.message });
  }
};

const updateOne = async (req: Request, res: Response) => {
  // reqIsCorrect(req:Request);
  try {
    const result: IWilder | null = await Wilder.findOne({ _id: req.params.id });
    if (!result) throw createError(404, 'Utilisateur introuvable');
    const resultUpdate = await Wilder.updateOne(
      { _id: req.params.id },
      { ...req.body }
    );

    res.json({ success: true, resultUpdate });
  } catch (err: any) {
    res.json({ success: false, err: err.message });
  }
};

const deleteOne = async (req: Request, res: Response) => {
  try {
    const result: IWilder | null = await Wilder.findOne({ _id: req.params.id });
    if (!result) throw createError(404, 'Utilisateur introuvable');
    await Wilder.deleteOne({ _id: req.params.id });
    res.json({ success: true, result });
  } catch (err: any) {
    res.json({ success: false, err: err.message });
  }
};

export default { getAll, createOne, getOne, updateOne, deleteOne };
