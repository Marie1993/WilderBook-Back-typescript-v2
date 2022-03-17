"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wilder_controller_1 = __importDefault(require("../controller/wilder-controller"));
const asyncHandler = require('express-async-handler');
const router = (0, express_1.Router)();
router.route('/create').post(asyncHandler(wilder_controller_1.default.createOne));
router.route('/').get(asyncHandler(wilder_controller_1.default.getAll));
router.route('/:id').get(asyncHandler(wilder_controller_1.default.getOne));
router.route('update/:id').put(asyncHandler(wilder_controller_1.default.updateOne));
router.route('delete/:id').delete(asyncHandler(wilder_controller_1.default.deleteOne));
exports.default = router;
//# sourceMappingURL=wilder-router.js.map