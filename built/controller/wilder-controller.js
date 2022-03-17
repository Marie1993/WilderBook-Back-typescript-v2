"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wilder_schema_1 = require("../model/wilder-schema");
const createError = require('http-errors');
const getAll = async (req, res) => {
    try {
        //   reqIsCorrect(req);
        await wilder_schema_1.WilderSchema.init();
        const wilder = new wilder_schema_1.WilderSchema(req.body);
        const result = await wilder.save();
        res.json({ success: true, result });
    }
    catch (err) {
        res.json({ success: false, result: err });
    }
};
const getOne = async (req, res) => {
    try {
        const result = await wilder_schema_1.WilderSchema.findOne({ _id: req.params.id });
        if (!result)
            throw createError(404, 'Utilisateur introuvable');
        res.json({ success: true, result });
    }
    catch (err) {
        res.json({ success: false, result: err });
    }
};
const createOne = async (req, res) => {
    try {
        //   reqIsCorrect(req);
        await wilder_schema_1.WilderSchema.init();
        const wilder = new wilder_schema_1.WilderSchema(req.body);
        const result = await wilder.save();
        res.json({ success: true, result });
    }
    catch (err) {
        res.json({ success: false, result: err });
    }
};
const updateOne = async (req, res) => {
    // reqIsCorrect(req:Request);
    try {
        const result = await wilder_schema_1.WilderSchema.findOne({ _id: req.params.id });
        if (!result)
            throw createError(404, 'Utilisateur introuvable');
        const resultUpdate = await wilder_schema_1.WilderSchema.updateOne({ _id: req.params.id }, { ...req.body });
        res.json({ success: true, resultUpdate });
    }
    catch (err) {
        res.json({ success: false, result: err });
    }
};
const deleteOne = async (req, res) => {
    try {
        const result = await wilder_schema_1.WilderSchema.findOne({ _id: req.params.id });
        if (!result)
            throw createError(404, 'Utilisateur introuvable');
        await wilder_schema_1.WilderSchema.deleteOne({ _id: req.params.id });
        res.json({ success: true, result });
    }
    catch (err) {
        res.json({ success: false, result: err });
    }
};
exports.default = { getAll, createOne, getOne, updateOne, deleteOne };
//# sourceMappingURL=wilder-controller.js.map