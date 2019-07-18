const models = require('../models');
const Place = models.Place;
const faker = require('faker');

for (let i = 0; i < 1; i++) {
  Place.create(
    {
    description: faker.lorem.sentence(),
    picture: faker.image.business(),
    price: '20$',
    adress: faker.address.city(),
    dated: faker.date.future(),
}
  )
    .then((place) => { console.log(place); })
    .catch((error) => { console.log(error); });
}


