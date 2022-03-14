const Router = require('express');

const router = new Router();

const bookController = require('../controllers/book.controller.js');

router.post('/book', bookController.createBook);

module.exports = router;