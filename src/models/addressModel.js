import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const Address = sequelize.define('Address', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  zip_code: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  district: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  number_forget: {
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
  id_user: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'adresses',
  timestamps: false,
});

export default Address;
