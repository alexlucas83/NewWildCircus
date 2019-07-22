const models = require('../models');
const Cart = models.Cart;
// use Cart for class and cart for instance
module.exports = {
  index: function (req, res, next) {
    Cart.findAll()
      .then((cart) => { res.json({ cart }) })
      .catch((error) => { console.log(error); });
  },


  show: function (req, res, next) {
    Cart.findByPk(req.params.id)
      .then((cart) => { res.json({ cart }) })
      .catch((error) => { console.log(error); });
  },


  create: (req, res, next) => {
    Cart.create({
      status: req.body.status,
    })
      .then((cart) => { res.json({ cart }); })
      .catch((error) => res.status(500).json({ error: error.errors[0].message }));
  },

  update: function(req, res, next){
    Cart.findByPk(req.params.id)
    .then((cart) => {
      if(cart){
        cart.update({ ...req.body })
        .then((cart) => {
          res.json({cart})
        })
        .catch((err) => res.json({err}))
      } else {
        res.json({message: 'Cart not found !'})
      }
    })
    .catch((err) => res.json({err}))
  },


  delete: function (req, res, next) {
    Cart.findByPk(req.params.id)
      .then((cart) => {
        cart.destroy()
          .then((destroyedcart) => { res.json({message: 'cart has been deleted !' }); })
          .catch((error) => { console.log(error); })
      })
      .catch((error) => { console.log(error); });
  },
};
