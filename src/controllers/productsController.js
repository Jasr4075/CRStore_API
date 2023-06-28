import Product from '../models/productModel';

// Obtener todos los productos
export async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Crear un nuevo producto
export async function createProduct(req, res) {
  try {
    const productData = req.body;
    const newProduct = await Product.create(productData);
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default {
  getProducts,
  createProduct,
};
