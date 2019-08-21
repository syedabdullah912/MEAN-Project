const express = require('express');
const router = express.Router();

//register
router.post('/register', (req, res, next) => {
    res.send('REGISTER');
});

//Authenticate

router.post('/authenticate', (req, res, next) => {
    res.send('ATHENTICATE');
});

//profile

router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

module.exports = router;