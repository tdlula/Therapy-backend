const express = require('express')
const Couple = require('../models/couple.model')
const router = express.Router()
const {getCouples, getCouple, updateCouple, createCouple, deleteCouple} = require('../controllers/couples/couple.controller')

router.get('/',getCouples);
router.get('/:id',getCouple);
router.put('/:id', updateCouple);
router.post('/',createCouple);
router.delete('/:id', deleteCouple);

module.exports = router;