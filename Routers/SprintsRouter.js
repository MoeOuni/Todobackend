const express = require('express');

const Controller = require('../controllers/SprintsController');

const router = express.Router();

router.post('/', Controller.create);
router.get('/', Controller.getAll);
router.patch('/:id', Controller.modifier);
router.delete('/:id', Controller.supprimer);

module.exports = router