import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING(14),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(16),
    allowNull: false,
  },
  password_hash: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING(255),
  },
  role: {
    type: DataTypes.STRING(255),
    defaultValue: 'customer',
    allowNull: false,
  },
  cart: {
    type: DataTypes.JSONB,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  recuperation: {
    type: DataTypes.STRING(255),
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: false,
});

export default User;
