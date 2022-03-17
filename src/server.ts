import express from 'express';

import cors from 'cors';

import connect from './utils/database';

import WilderRouter from './router/wilder-router';
import errorHandler from './utils/error';

const app = express();

// database cnx
connect();

// middelwares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use('/api/wilder', WilderRouter);
app.use(errorHandler);

// gestion des erreurs

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// app.use((error: any, req: Request, res: Response, next: NextFunction) => {
//   // Sets HTTP status code
//   res.status(error.status || 500);
//   // Sends response
//   res.json({ message: error.message });
// });

// //Start Server
app.listen(5000, () => console.log('Server started on http://localhost:5000/'));
