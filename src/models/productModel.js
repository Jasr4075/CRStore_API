import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(2000),
  },
  description: {
    type: DataTypes.STRING(300),
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  id_category: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'products',
  timestamps: false,
});

export default Product;
