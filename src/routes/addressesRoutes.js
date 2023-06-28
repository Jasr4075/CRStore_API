import express from 'express';
const router = express.Router();
import { getPayments, createPayment } from '../controllers/paymentsController';

// Obtener todos los pagos
router.get('/', getPayments);

// Crear un nuevo pago
router.post('/', createPayment);

export default router;
