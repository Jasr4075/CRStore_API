import Category from "../models/Category";

const getAll = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Please provide a valid category ID' });
    }

    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ message: `Category with ID ${id} not found` });
    }

    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const persist = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Please provide a name for the category' });
    }

    if (!id) {
      // Crear una nueva categoría
      const category = await Category.create({ name });
      return res.status(201).json(category);
    } else {
      // Actualizar una categoría existente
      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({ message: `Category with ID ${id} not found` });
      }

      category.name = name;
      await category.save();

      return res.status(200).json(category);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'Please provide a valid category ID' });
    }

    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ message: `Category with ID ${id} not found` });
    }

    await category.destroy();

    return res.status(200).json({ message: `Category with ID ${id} successfully deleted` });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default {
  getAll,
  getById,
  persist,
  destroy
};
