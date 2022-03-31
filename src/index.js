const express = require('express')
const cors = require('cors')
const account = require('../src/routes/account')
const user = require('../src/routes/user')
const auth = require('../src/routes/auth')


const app = express()


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api/account', account)
app.use('/api/signup', user)
app.use('/api/signin', auth)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})