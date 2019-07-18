'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    price: DataTypes.STRING,
    picture: DataTypes.STRING,
    description: DataTypes.STRING,
    adress: DataTypes.STRING,
    dated: DataTypes.DATE
  }, {});
  Place.associate = function(models) {
    Place.belongsToMany(models.Place, { through: 'cartHasPlaces', foreignKey: 'placeId', as: 'places' });
  };
  return Place;
};