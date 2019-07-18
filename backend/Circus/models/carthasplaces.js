'use strict';
module.exports = (sequelize, DataTypes) => {
  const CarthasPlaces = sequelize.define('CarthasPlaces', {
    CartId: DataTypes.INTEGER,
    PlaceId: DataTypes.INTEGER
  }, {});
  CarthasPlaces.associate = function(models) {
    CarthasPlaces.belongsTo(models.Cart, { foreignKey: 'cartId', as: 'cart'  });
    CarthasPlaces.belongsTo(models.Place, { foreignKey: 'placeId',as: 'place'  });
  };
  return CarthasPlaces;
};