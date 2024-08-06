import { Router } from 'express';
import {userRouter, productRouter} from './';
import { orderRouter } from './ordersRoutes';
import { roleRouter } from './roleRotues';
import { cartRouter } from './cartRoutes';
import { entitiesRouter } from './entitiesRoutes';
import { productCartRouter } from './productCartRoutes';

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/orders',orderRouter)
router.use('/roles',roleRouter)
router.use('/carts',cartRouter)
router.use('/entities',entitiesRouter)
router.use('/productCart',productCartRouter)


export default router;