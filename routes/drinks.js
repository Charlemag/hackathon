//Require Libraries
var express = require('express');
var router = express.Router();
const axios = require ('axios');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//Seach bar: when clicked, renders the page (.hbs)
router.get('/search', (req, res, next) => {
    res.render('drinkSearch.hbs')
})

//Sending data to the server
router.post('/search', (req, res, next) => {
    
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.body.search}`)
        .then((results) => {
            let searchResults = results.data.drinks
            console.log("Results from API:", results.data.drinks)
            res.render('drinkSearch.hbs', {searchResults})
        })
        .catch((err) => {
            console.log
        })
})


module.exports = router;