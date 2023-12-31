import { DataTypes } from "sequelize";
import sequelize from "../config/config.js";

const DiscountCoupon = sequelize.define(
  'discount_coupons',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    coupon: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    discount: {
        type: DataTypes.NUMERIC(15,2),
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

export default DiscountCoupon;
