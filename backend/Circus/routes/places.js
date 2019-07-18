var express = require('express');
var router = express.Router();
const placeControllers = require('../controllers/placeController');


/* GET placeslisting. */
router.get('/', placeControllers.index);
router.get('/:id', placeControllers.show);
router.post('/', placeControllers.create);
router.put('/:id', placeControllers.update);
router.delete('/:id', placeControllers.delete);

module.exports = router;
