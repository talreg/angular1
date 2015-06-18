var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/movies', function (req, res, next) {
    res.render('movies');
});
router.get('/list', function (req, res, next) {
    var env_data=process.env.NODE_ENV||"unknown";
    var movieList = {data: [
            {name: 'Arnold Schwarzenegger', movie: 'Terminator 2: Judgment Day'},
            {name: 'Brad Pitt', movie: 'World War Z'},
            {name: 'Noomi Rapace', movie: 'Prometheus'},
            {name: 'Haley Joel Osment', movie: 'Secondhand Lions'},
            {name: 'Juda Barkan', movie: '1+0.5 charlie'},
            {name:'system variable',movie:env_data}
        ]};
    //simulate database transaction
    setTimeout(function () {
        res.send(JSON.stringify(movieList));
    }, 0300);
});
module.exports = router;
