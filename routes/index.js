var express = require('express');
var router = express.Router();

/* GET home page. */
router
    .get('/', function (req, res, next) {
        res.render('index', {
            title: '드라마앤컴퍼니 - 사랑의 친밥'
        });
    })
    .get('/countdown', (req, res, next) => {
        res.render('countDown', {
            title: '드라마앤컴퍼니 - 칭찬 타임'
        });
    });

module.exports = router;