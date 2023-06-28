import express from 'express';
const router = express.Router();
import { paymentsController } from '../controllers/paymentsController';
// Obtener todos los pagos
router.get('/', paymentsController.getPayments);

// Crear un nuevo pago
router.post('/', paymentsController.createPayment);

export default router;
