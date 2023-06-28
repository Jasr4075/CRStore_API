import express from 'express';
const router = express.Router();
import { ordersController} from '../controllers/ordersController';
// Obtener todas las órdenes
router.get('/', ordersController.getOrders);

// Crear una nueva orden
router.post('/', ordersController.createOrder);

export default router;
