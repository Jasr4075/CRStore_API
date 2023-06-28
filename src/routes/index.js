import express from 'express';
const router = express.Router();

// Importa y utiliza las rutas individuales aquí
import usersRoutes from './usersRoutes';
import paymentsRoutes from './paymentsRoutes';
import cupomsRoutes from './cupomsRoutes';
import categoriesRoutes from './categoriesRoutes';
import addressesRoutes from './addressesRoutes';
import productsRoutes from './productsRoutes';
import ordersRoutes from './ordersRoutes';

router.use('/users', usersRoutes);
router.use('/payments', paymentsRoutes);
router.use('/cupoms', cupomsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/addresses', addressesRoutes);
router.use('/products', productsRoutes);
router.use('/orders', ordersRoutes);

export default router;
