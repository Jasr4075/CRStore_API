import Order from '../models/orderModel';

// Obtener todas las órdenes
export async function getOrders(req, res) {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Crear una nueva orden
export async function createOrder(req, res) {
  try {
    const orderData = req.body;
    const newOrder = await Order.create(orderData);
    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default {
  getOrders,
  createOrder,
};
