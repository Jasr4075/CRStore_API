import express from 'express';
const router = express.Router();
import { categoriesController } from '../controllers/categoriesController';  
// Obtener todas las categorías
router.get('/', categoriesController.getCategories);

// Crear una nueva categoría
router.post('/', categoriesController.createCategory);

export default router;
