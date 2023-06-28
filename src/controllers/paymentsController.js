import Payment from '../models/paymentModel';

// Obtener todos los pagos
export async function getPayments(req, res) {
  try {
    const payments = await Payment.findAll();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Crear un nuevo pago
export async function createPayment(req, res) {
  try {
    const paymentData = req.body;
    const newPayment = await Payment.create(paymentData);
    res.json(newPayment);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default {
  getPayments,
  createPayment,
};
