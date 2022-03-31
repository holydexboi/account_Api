const knex = require('knex')
const config = require('../knexfile')
const bcrypt = require('bcrypt')
const configu = require('config')
const jwt = require('jsonwebtoken');
const db = knex(config.development)

async function add(user) {
    const output = await db('user')
        .where({ email: user.email })
        .select('username')
    
    if (output[0]) throw new Error('User with the given email already exist')

    const id = await db('user').insert(user);
    
    return id
}

async function signin(user) {
    
    const output = await db('user')
        .where({ email: user.email })
        .select('userId','username','password')
    
    if (!output[0]) throw new Error('Invalid email/password')
    
    const result = await bcrypt.compare(user.password, output[0].password)
    if (!result) throw new Error('Invalid email/password')
    
    const token = jwt.sign({ _id: output[0].userId }, configu.get('jwtPrivateKey'));
    
    return token
}

module.exports = {add, signin}