import { DataTypes } from "sequelize";
import sequelize from "../config/config.js";
import User from "./User";

const Address = sequelize.define(
  'addresses',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    street: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    neighborhood: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    number: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    complement: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

Address.belongsTo(User, {
    as: 'user',
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name: 'idUser',
        allowNull: false,
        field: 'id_user'
    }
});

export default Address;
