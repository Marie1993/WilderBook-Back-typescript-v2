"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WilderSchema = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
    },
    city: String,
    description: String,
    skills: [
        {
            title: String,
            votes: Number,
        },
    ],
});
// eslint-disable-next-line import/prefer-default-export
exports.WilderSchema = (0, mongoose_1.model)('Wilder', schema);
//# sourceMappingURL=wilder-schema.js.map