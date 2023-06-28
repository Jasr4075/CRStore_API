import User from '../models/userModel';

// Controlador para obtener todos los usuarios
export async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controlador para crear un nuevo usuario
export async function createUser(req, res) {
  try {
    const userData = req.body;
    const newUser = await User.create(userData);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
