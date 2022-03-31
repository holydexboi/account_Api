const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

async function add(account) {
    const output = await db('account')
        .where({ user: account.user })
        .select('accountId')
    
    if (output[0]) throw new Error('User already has an account')

    const id = await db('account').insert(account);

    return id
}

async function deposit(userId, amount) {

    const output = await db('account')
        .where({ user: userId })
        .select('accountId')
    
    if (!output[0]) throw new Error('This user does not have an account and cannot deposit')

    const account = await db('account')
        .where('user', '=', userId)
        .increment({
            balance: amount
        })

    return account
}

async function withdraw(userId, amount) {

    const output = await db('account')
        .where({ user: userId })
        .select('accountId')
    
    if (!output[0]) throw new Error('This user does not have an account and cannot withdraw')

    const acctBalance = await db('account')
        .where({
            user: userId
        }).select('balance')
    
    
    if(acctBalance[0].balance < amount) throw new Error('Insufficient balance')
    
    const account = await db('account')
        .where('user', '=', userId)
        .decrement({
            balance: amount
        })
    
    return account
}

async function transfer(userId, receiverId, amount) {

    const output = await db('account')
        .where({ user: userId })
        .select('accountId')
    
    if (!output[0]) throw new Error('This user does not have an account and cannot transfer')

    const receiver = await db('account')
        .where({ accountId: receiverId })
        .select('accountId')
    
    if (!receiver[0]) throw new Error('This user with this account number does not exist')

    const acctBalance = await db('account')
        .where({
            user: userId
        }).select('balance')

    if (acctBalance[0].balance < amount) throw new Error('Insufficient balance')
    
    try {
        
        await db.transaction(async trx => {
    
            await trx('account')
                .where('user', '=', userId)
                .decrement({
                    balance: amount
                })
            
            await trx('account')
                .where('accountId', '=', receiverId)
                .increment({
                    balance: amount
                })
                
        })

    }
    catch (error) {
        console.log(error.message)
    }
}

module.exports = { add, deposit, withdraw, transfer }
