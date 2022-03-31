const express = require('express');
const userRoute = require('../src/routes/user')
const request = require('supertest')
const app = express()

app.use(express.json());
app.use('/user', userRoute);

describe("User", () => {

    it('should return no username', async () => {

        let userObj = {
            email: "zulikif@gmail.com",
            password: "GreatCode"
        }
        
        const body = await request(app).post('/user').send(userObj);
        expect(body.statusCode).toBe(400)
        expect(body.text).toContain('username not define')

    })

    it('should return no email', async () => {

        let userObj = {
            username: "Dhulqev",
            password: "GreatCode"
        }
        
        const body = await request(app).post('/user').send(userObj);
        expect(body.statusCode).toBe(400)
        expect(body.text).toContain('email not define')

    })

    it('should return no password', async () => {

        let userObj = {
            username: "Dhulqev",
            email: "zulikif@gmail.com"
        }
        
        const body = await request(app).post('/user').send(userObj);
        expect(body.statusCode).toBe(400)
        expect(body.text).toContain('password not define')

    })

    it('should return user already exist', async () => {

        let userObj = {
            username: "Dhulqev",
            email: "zulikifdami@gmail.com",
            password: "GreatCode"
        }
        
        const body = await request(app).post('/user').send(userObj);
        expect(body.statusCode).toBe(500)
        expect(body.text).toContain('User with the given email already exist')

    })
})

