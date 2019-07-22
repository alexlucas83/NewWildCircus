const models = require('../models');
const Place = models.Place;
const faker = require('faker');

for (let i = 0; i < 10; i++) {
  Place.create(
    {
    description: faker.lorem.sentence(),
    // picture: faker.image.business(),
    picture:"http://cdn.oboxeditions.com/sites/prod/files/styles/gallery/public/photos/alegria-du-cirque-du-soleil-un-retour-en-force-eblouissant-photos-556919.jpg",
    price: '20$',
    adress: faker.address.city(),
    dated: faker.date.future(),
}
  )
    .then((place) => { console.log(place); })
    .catch((error) => { console.log(error); });
}


