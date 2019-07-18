'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    status: DataTypes.STRING
  }, {});
  Cart.associate = function(models) {
    Cart.belongsToMany(models.Place, { through: 'cartHasPlaces', foreignKey: 'cartId', as: 'cart' });
  };
  return Cart;
};