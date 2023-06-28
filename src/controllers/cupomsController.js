import Cupom from '../models/cupomModel';

// Obtener todos los cupones
export async function getCupoms(req, res) {
  try {
    const cupoms = await Cupom.findAll();
    res.json(cupoms);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Crear un nuevo cupón
export async function createCupom(req, res) {
  try {
    const cupomData = req.body;
    const newCupom = await Cupom.create(cupomData);
    res.json(newCupom);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default {
  getCupoms,
  createCupom,
};
