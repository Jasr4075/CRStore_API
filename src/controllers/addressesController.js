import Address from '../models/Address';

// Obtener todas las direcciones
export async function getAddresses(req, res) {
  try {
    const addresses = await Address.findAll();
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Crear una nueva dirección
export async function createAddress(req, res) {
  try {
    const addressData = req.body;
    const newAddress = await Address.create(addressData);
    res.json(newAddress);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default {
  getAddresses,
  createAddress,
};
