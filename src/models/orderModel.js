import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status: {
    type: DataTypes.STRING(255),
    defaultValue: 'criado',
  },
  total: {
    type: DataTypes.NUMERIC,
  },
  total_discount: {
    type: DataTypes.NUMERIC,
    defaultValue: 0,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  id_user_costumer: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_user_deliver: {
    type: DataTypes.INTEGER,
  },
  id_address: {
    type: DataTypes.INTEGER,
  },
  id_payment: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_cupom: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'orders',
  timestamps: false,
});

export default Order;
