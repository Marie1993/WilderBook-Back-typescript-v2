"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (error, req, res) => {
    console.info({
        status: error.status || 500,
        message: error.message,
        stack: error.stack,
    });
    res.status(error.status || 500).send({
        status: error.status || 500,
        message: error.message,
        stack: error.stack,
    });
};
exports.default = errorHandler;
//# sourceMappingURL=error.js.map