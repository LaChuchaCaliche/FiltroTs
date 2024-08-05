import { Router } from 'express';
import {userRouter, productRouter} from './';
import { orderRouter } from './ordersRoutes';

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/orders',orderRouter)

export default router;