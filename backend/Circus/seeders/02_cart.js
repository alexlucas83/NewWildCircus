const models = require('../models');
const Cart = models.Cart;
const faker = require('faker');

for (let i = 0; i < 10; i++) {
  Cart.create(
    {
    status: faker.lorem.sentence(),
}
  )
    .then((cart) => { console.log(cart); })
    .catch((error) => { console.log(error); });
}