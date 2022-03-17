"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const connectionSting = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.CLUSTER}.qdxvt.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
async function connect() {
    try {
        await mongoose_1.default.connect(connectionSting, {
            autoIndex: true,
        });
        console.info('Connected to database');
    }
    catch (err) {
        console.info(err);
    }
}
exports.default = connect;
//# sourceMappingURL=database.js.map