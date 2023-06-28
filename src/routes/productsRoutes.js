import express from 'express';
const router = express.Router();
import { productsController} from '../controllers/productsController';
// Obtener todos los productos
router.get('/', productsController.getProducts);

// Crear un nuevo producto
router.post('/', productsController.createProduct);

export default router;
