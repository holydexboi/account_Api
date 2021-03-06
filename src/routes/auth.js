const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.post('/', async (req, res) => {
    if (!req.body.email) return res.status(400).send('Email not define')
    
    if (!req.body.password) return res.status(400).send('Password not define')

    User.signin({email: req.body.email, password: req.body.password})
        .then(token => {
            res.header('x-auth-token', token).send('Ok');
        })
        .catch(error => {
        res.status(500).send(error.message)
    })
    
})

module.exports = router