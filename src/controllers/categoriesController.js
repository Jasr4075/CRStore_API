import Category from '../models/categoryModel';

// Obtener todas las categorías
export async function getCategories(req, res) {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Crear una nueva categoría
export async function createCategory(req, res) {
  try {
    const categoryData = req.body;
    const newCategory = await Category.create(categoryData);
    res.json(newCategory);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default {
  getCategories,
  createCategory,
};
