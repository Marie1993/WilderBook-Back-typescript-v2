"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./utils/database"));
const wilder_router_1 = __importDefault(require("./router/wilder-router"));
const error_1 = __importDefault(require("./utils/error"));
const app = (0, express_1.default)();
// database cnx
(0, database_1.default)();
// middelwares
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// ROUTES
app.use('/api/wilder', wilder_router_1.default);
app.use(error_1.default);
// gestion des erreurs
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// app.use((error: any, req: Request, res: Response, next: NextFunction) => {
//   // Sets HTTP status code
//   res.status(error.status || 500);
//   // Sends response
//   res.json({ message: error.message });
// });
//# sourceMappingURL=server.js.map