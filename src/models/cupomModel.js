import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const Cupom = sequelize.define('Cupom', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  code: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING(255),
    defaultValue: 'percent',
    allowNull: false,
  },
  value: {
    type: DataTypes.NUMERIC,
    allowNull: false,
  },
  uses: {
    type: DataTypes.INTEGER,
    defaultValue: 999,
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
  tableName: 'cupoms',
  timestamps: false,
});

export default Cupom;
