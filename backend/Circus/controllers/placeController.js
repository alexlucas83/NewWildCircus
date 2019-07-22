const models = require('../models');
const Place = models.Place;
// use Cart for class and cart for instance
module.exports = {
  index: function (req, res, next) {
    Place.findAll()
      .then((place) => { res.json({ place }) })
      .catch((error) => { console.log(error); });
  },


  show: function (req, res, next) {
    Place.findByPk(req.params.id)
      .then((place) => { res.json({ place }) })
      .catch((error) => { console.log(error); });
  },

  create: (req, res, next) => {
    Place.create({...req.body})
      .then((place) => { res.json({ place }); })
      .catch((error) => res.status(500).json({ message: 'place has been createted !'}));
  },


  update: function(req, res, next){
    Place.findByPk(req.params.id)
    .then((place) => {
      if(place){
        place.update({ ...req.body })
        .then((place) => {
          res.json({place})
        })
        .catch((err) => res.json({err}))
      } else {
        res.json({message: 'Place not found !'})
      }
    })
    .catch((err) => res.json({err}))
  },

  delete: function (req, res, next) {
    Place.findByPk(req.params.id)
      .then((place) => {
        place.destroy()
          .then((destroyedplace) => { res.json({message: 'place has been deleted !' }); })
          .catch((error) => { console.log(error); })
      })
      .catch((error) => { console.log(error); });
  },
};
