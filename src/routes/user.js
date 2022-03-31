const express = require('express')
const bcrypt = require('bcrypt')
const {v4} = require('uuid')
const User = require('../models/user')
const jwt = require('jsonwebtoken');
const config = require('config')

const router = express.Router()

router.post('/', async (req, res) => {

    if (!req.body.username) return res.status(400).send('username not define')
    if (!req.body.email) return res.status(400).send('email not define')
    if (!req.body.password) return res.status(400).send('password not define')
    
    const userId = v4()
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt)
    const email = req.body.email
    const username = req.body.username

    User.add({userId: userId, username, email, password: password})
        .then(user => {
            const token = jwt.sign({ _id: userId }, config.get('jwtPrivateKey'));
            res.header('x-auth-token', token).send({userId, email, username});
        })
        .catch(error => {
        res.status(500).send(error.message)
    })
    
})

module.exports = router