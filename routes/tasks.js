const router = require('express').Router();
const controller = require('../controllers/tasks');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.patch('/:id', controller.updateById);
router.delete('/:id', controller.deleteById);

module.exports = router