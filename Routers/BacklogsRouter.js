const express = require('express');

const Controller = require('../controllers/BacklogsController');

const router = express.Router();

router.post('/', Controller.ajouter);
router.delete('/:id', Controller.effacer);
router.patch('/:id', Controller.modifier);
router.get('/', Controller.GetAllTasck);
router.patch('/swap/all', Controller.swap)


module.exports = router