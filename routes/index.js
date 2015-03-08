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
    var movieList={data : [
        {name: 'Arnold Schwarzenegger', movie: 'Terminator 2: Judgment Day'},
        {name: 'Brad Pitt', movie: 'World War Z'},
        {name: 'Noomi Rapace', movie: 'Prometheus'},
        {name: 'Haley Joel Osment', movie: 'Secondhand Lions'}
    ]};
    res.send(JSON.stringify(movieList));
});
module.exports = router;
