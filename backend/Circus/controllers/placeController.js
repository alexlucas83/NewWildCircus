const models = require('../models');
const Place = models.Place;
// use Place for class and place for instance
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


  create: function (req, res, next) {
    Place.create({     
			price: req.body.price,
			picture: req.body.picture,
			description: req.body.description,
			adress: req.body.adress,
			dated: req.body.dated
	 })
      .then((place) => { res.json({ place }) })
      .catch((error) => { console.log(error); })
  },


  update: function (req, res, next) {
    Place.findByPk(req.body.id)
      .then((place) => {
        place.update({ 
					price: req.body.price,
					picture: req.body.picture,
					description: req.body.description,
					adress: req.body.adress,
					dated: req.body.dated,
			
				 })
          .then((updatedplace) => { res.json({ updatedplace }); })
          .catch((error) => { console.log(error); })
      })
      .catch((error) => { console.log(error); });
  },
  delete: function (req, res, next) {
    Place.findByPk(req.params.id)
      .then((place) => {
        place.destroy()
          .then((destroyedplace) => { res.json({ message: 'cart has been deleted !'}); })
          .catch((error) => { console.log(error); })
      })
      .catch((error) => { console.log(error); });
  },
};
