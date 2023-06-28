import User from './userModel';
import Payment from './paymentModel';
import Cupom from './cupomModel';
import Category from './categoryModel';
import Address from './addressModel';
import Product from './productModel';
import Order from './orderModel';

(async () => {
  // await User.sync({ force: true});
  // await Payment.sync({ force: true});
  // await Cupom.sync({ force: true});
  // await Category.sync({ force: true});
  // await Address.sync({ force: true});
  // await Product.sync({ force: true});
  // await Order.sync({ force: true});
})();

export {
  User,
  Payment,
  Cupom,
  Category,
  Address,
  Product,
  Order,
};
