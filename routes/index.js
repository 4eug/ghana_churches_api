const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');
const {getchurches} = require('../controller/churches');
const fs = require('fs');

router.get('/',(req, res) => {
    res.send('Churches in Ghana Api add /posts to the endpoint and get your data Thanks');
});



module.exports = router;