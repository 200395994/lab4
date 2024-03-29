﻿'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;


/* GET Login page. */
router.get('/login', function (req, res) {
    res.render('login', { title: 'Express' });
});

module.exports = router;


/* GET Registration page. */
router.get('/registration', function (req, res) {
    res.render('registration', { title: 'Express' });
});

module.exports = router;
