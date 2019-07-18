var express = require('express');
var router = express.Router();
const cartControllers = require('../controllers/cartController');


/* GET cartslisting. */
router.get('/', cartControllers.index);
router.get('/:id', cartControllers.show);
router.post('/', cartControllers.create);
router.put('/:id', cartControllers.update);
router.delete('/:id', cartControllers.delete);

module.exports = router;
