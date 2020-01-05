const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', (req, res) => homeController.index(req, res));

router.get('/about', (req, res) => homeController.about(req, res));

router.get('/contact', (req, res) => homeController.contact(req, res));

router.get('/news', (req, res) => homeController.news(req, res));

router.get('/services', (req, res) => homeController.services(req, res));

module.exports = router;
