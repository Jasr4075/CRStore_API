import express from 'express';
const router = express.Router();
import { cupomsController } from '../controllers/cupomsController';
// Obtener todos los cupones
router.get('/', cupomsController.getCupoms);

// Crear un nuevo cupón
router.post('/', cupomsController.createCupom);

export default router;
