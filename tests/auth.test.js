const express = require('express');
const authRoute = require('../src/routes/auth')
const request = require('supertest')
const app = express()

app.use(express.json());
app.use('/auth', authRoute);

describe("User", () => {
     
    it("Should return user registration details", async () => {
       
        let userObj = {
            email: "zulikifgmail.com",
            password: "GreatCode"
        }

        const body = await request(app).post('/auth').send(userObj)
        expect(body.statusCode).toBe(200)
        expect(body.text).toContain('Ok')

    })

    it("Should return error", async () => {
       
        let userObj = {
            password: "GreatCode"
        }

        const body = await request(app).post('/auth').send(userObj);
        expect(body.statusCode).toBe(400)
        expect(body.text).toContain('Email not define')
        

    })

    it("Should return error", async () => {
       
        let userObj = {
            email: "zulikifgmail.com",
            
        }

        const body = await request(app).post('/auth').send(userObj);
        expect(body.statusCode).toBe(400)
        expect(body.text).toContain('Password not define')
        

    })

    it("Should return invalid user", async () => {
       
        let userObj = {
            email: "zulikifgmail.co",
            password: "GreatCode"
        }

        const body = await request(app).post('/auth').send(userObj);
        expect(body.statusCode).toBe(500)
        expect(body.text).toContain('Invalid email/password')
        

    })

    it("Should return invalid password", async () => {
       
        let userObj = {
            email: "zulikifgmail.com",
            password: "GreatCo"
        }

        const body = await request(app).post('/auth').send(userObj);
        expect(body.statusCode).toBe(500)
        expect(body.text).toContain('Invalid email/password')
        

    })
})