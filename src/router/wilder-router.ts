import { Router } from 'express';

import Wildercontroller from '../controller/wilder-controller';

const asyncHandler = require('express-async-handler');

const router = Router();

router
  .route('/')
  .post(asyncHandler(Wildercontroller.createOne))
  .get(asyncHandler(Wildercontroller.getAll));

router
  .route('/:id')
  .get(asyncHandler(Wildercontroller.getOne))
  .put(asyncHandler(Wildercontroller.updateOne))
  .delete(asyncHandler(Wildercontroller.deleteOne));

export default router;
