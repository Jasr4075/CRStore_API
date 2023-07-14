import Order from "../models/Order";

const getAll = async (req, res) => {
  try {
    const orders = await Order.findAll();
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
};

const getById = async (req, res) => {
  try {
    let { id } = req.params;

    // Garantiza que el id solo tenga NÚMEROS;
    id = id.replace(/\D/g, '');
    if (!id) {
      return res.status(400).send({
        message: 'Please enter a valid id for the query'
      });
    }

    let order = await Order.findOne({
      where: {
        id
      }
    });

    if (!order) {
      return res.status(404).send({
        message: `No order found with the id ${id}`
      });
    }

    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
};

const persist = async (req, res) => {
  try {
    let { id } = req.params;
    // Si no hay id, crea un nuevo registro
    if (!id) {
      return await create(req.body, res);
    }

    return await update(id, req.body, res);
  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
};

const create = async (dados, res) => {
  let { total_price, id_user, id_discount_coupon, id_deliveryman, id_payment } = dados;

  let order = await Order.create({
    total_price, 
    id_user, 
    id_discount_coupon, 
    id_deliveryman, 
    id_payment
  });
  return res.status(201).send(order);
};

const update = async (id, dados, res) => {
  let { total_price, id_user, id_discount_coupon, id_deliveryman, id_payment } = dados;
  let order = await Order.findOne({
    where: {
      id
    }
  });

  if (!order) {
    return res.status(404).send({ type: 'error', message: `No order found with the id ${id}` });
  }

  // Actualización de los campos
  Object.keys(dados).forEach(field => order[field] = dados[field]);

  await order.save();
  return res.status(200).send({
    message: `Order ${id} successfully updated`,
    data: order
  });
};

const destroy = async (req, res) => {
  try {
    let { id } = req.body;
    // Garantiza que el id solo tenga NÚMEROS;
    id = id ? id.toString().replace(/\D/g, '') : null;
    if (!id) {
      return res.status(400).send({
        message: 'Enter a valid id to delete an order'
      });
    }

    let order = await Order.findOne({
      where: {
        id
      }
    });

    if (!order) {
      return res.status(404).send({ message: `Order with the id ${id} not found` });
    }

    await order.destroy();
    return res.status(204).send({
      message: `Order id ${id} successfully deleted`
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
};

export default {
  getAll,
  getById,
  persist,
  destroy
};
