const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')
const conversion = require('../middleware/conversion')

const bookCtrl = require('../controllers/book')

router.get('/', bookCtrl.getAllBooks)
router.get('/bestrating', bookCtrl.getBestRating)
router.get('/:id', bookCtrl.getOneBook)
router.post('/', auth, multer, conversion, bookCtrl.createBook)
router.put('/:id', auth, multer, conversion, bookCtrl.modifyBook)
router.delete('/:id', auth, bookCtrl.deleteBook)
router.post('/:id/rating', auth, bookCtrl.rateBook)

module.exports = router