const express = require('express');
const accountRoute = require('../src/routes/account')
const request = require('supertest')
const app = express()

app.use(express.json());
app.use('/account', accountRoute);

describe("Account", () => {
     
    // it("Should create account", async () => {
       
    //     let accountObj = {
    //         user: '93a8d49b-8ae3-4297-9537-ad10b3008916',
    //         amount: 30
    //     }

        

    //     const body = await request(app).post('/account/create').send(accountObj).set({'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4ZTc2YWE3Mi03NWE1LTRmNzktOTY1ZC0yYWI2MWNmMGUyYmIiLCJpYXQiOjE2NDg0MjI5OTB9.WQh1zowQ0wIxLZD3qnJ7A8khPLNxPxpIJ7pHn3jLpsE'})
    //     expect(body.statusCode).toBe(200)

    // })

    it("Should return user already has an account", async () => {
       
        let accountObj = {
            amount: 30
        }

        

        const body = await request(app).post('/account/create').send(accountObj).set({'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4ZTc2YWE3Mi03NWE1LTRmNzktOTY1ZC0yYWI2MWNmMGUyYmIiLCJpYXQiOjE2NDg0MjI5OTB9.WQh1zowQ0wIxLZD3qnJ7A8khPLNxPxpIJ7pHn3jLpsE'})
        expect(body.statusCode).toBe(500)
        expect(body.text).toBe('User already has an account')

    })

    it("Should deposit amount", async () => {
       
        let accountObj = {
            amount: 20
        }

        

        const body = await request(app).post('/account/deposit').send(accountObj).set({'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4ZTc2YWE3Mi03NWE1LTRmNzktOTY1ZC0yYWI2MWNmMGUyYmIiLCJpYXQiOjE2NDg0MjI5OTB9.WQh1zowQ0wIxLZD3qnJ7A8khPLNxPxpIJ7pHn3jLpsE'})
        expect(body.statusCode).toBe(200)
        expect(body.text).toBe('Your account has been credited successfully')

    })

    it("Should return enter amount to deposit", async () => {
       
        let accountObj = {
            
        }

        

        const body = await request(app).post('/account/deposit').send(accountObj).set({'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4ZTc2YWE3Mi03NWE1LTRmNzktOTY1ZC0yYWI2MWNmMGUyYmIiLCJpYXQiOjE2NDg0MjI5OTB9.WQh1zowQ0wIxLZD3qnJ7A8khPLNxPxpIJ7pHn3jLpsE'})
        expect(body.statusCode).toBe(400)
        expect(body.text).toBe('Please enter amount to deposit')

    })

    it("Should return enter amount to deposit", async () => {
       
        let accountObj = {
            amount: 30
        }

        

        const body = await request(app).post('/account/deposit').send(accountObj).set({'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyNDkyZTRjOC1jOThlLTQ2YzktOTIyZi0xZTc4N2FhMDFiYjIiLCJpYXQiOjE2NDg3NjYwMDl9.8oKfv4AQFhxbEvww2L1KmRW9IjL_s_sZbq25tWv-AZM'})
        expect(body.statusCode).toBe(500)
        expect(body.text).toBe('This user does not have an account and cannot deposit')

    })

    it("Should withdraw amount", async () => {
       
        let accountObj = {
            amount: 10
        }

        

        const body = await request(app).post('/account/withdraw').send(accountObj).set({'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4ZTc2YWE3Mi03NWE1LTRmNzktOTY1ZC0yYWI2MWNmMGUyYmIiLCJpYXQiOjE2NDg0MjI5OTB9.WQh1zowQ0wIxLZD3qnJ7A8khPLNxPxpIJ7pHn3jLpsE'})
        expect(body.statusCode).toBe(200)
        expect(body.text).toBe('Your account has been debited successfully')

    })

    it("Should return enter amount", async () => {
       
        let accountObj = {
            
        }

        

        const body = await request(app).post('/account/withdraw').send(accountObj).set({'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4ZTc2YWE3Mi03NWE1LTRmNzktOTY1ZC0yYWI2MWNmMGUyYmIiLCJpYXQiOjE2NDg0MjI5OTB9.WQh1zowQ0wIxLZD3qnJ7A8khPLNxPxpIJ7pHn3jLpsE'})
        expect(body.statusCode).toBe(400)
        expect(body.text).toBe('Please enter amount to withdraw')

    })

    it("Should return insufficient balance", async () => {
       
        let accountObj = {
            amount: 2000000
        }

        

        const body = await request(app).post('/account/withdraw').send(accountObj).set({'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4ZTc2YWE3Mi03NWE1LTRmNzktOTY1ZC0yYWI2MWNmMGUyYmIiLCJpYXQiOjE2NDg0MjI5OTB9.WQh1zowQ0wIxLZD3qnJ7A8khPLNxPxpIJ7pHn3jLpsE'})
        expect(body.statusCode).toBe(500)
        expect(body.text).toBe('Insufficient balance')

    })

    it("Should transfer amount", async () => {
       
        let accountObj = {
            amount: 5,
            accountId: '497ceb6a-7415-48bf-ae5e-0780da898dc9'
        }

        

        const body = await request(app).post('/account/transfer').send(accountObj).set({'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4ZTc2YWE3Mi03NWE1LTRmNzktOTY1ZC0yYWI2MWNmMGUyYmIiLCJpYXQiOjE2NDg0MjI5OTB9.WQh1zowQ0wIxLZD3qnJ7A8khPLNxPxpIJ7pHn3jLpsE'})
        expect(body.statusCode).toBe(200)
        expect(body.text).toBe('You have successfully transfered the funds')

    })

    it("Should return enter transfer amount", async () => {
       
        let accountObj = {
            accountId: '497ceb6a-7415-48bf-ae5e-0780da898dc9'
        }

        

        const body = await request(app).post('/account/transfer').send(accountObj).set({'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4ZTc2YWE3Mi03NWE1LTRmNzktOTY1ZC0yYWI2MWNmMGUyYmIiLCJpYXQiOjE2NDg0MjI5OTB9.WQh1zowQ0wIxLZD3qnJ7A8khPLNxPxpIJ7pHn3jLpsE'})
        expect(body.statusCode).toBe(400)
        expect(body.text).toBe('Please enter amount to transfer')

    })

    it("Should return enter receiver account", async () => {
       
        let accountObj = {
            amount: 5,
        }

        

        const body = await request(app).post('/account/transfer').send(accountObj).set({'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4ZTc2YWE3Mi03NWE1LTRmNzktOTY1ZC0yYWI2MWNmMGUyYmIiLCJpYXQiOjE2NDg0MjI5OTB9.WQh1zowQ0wIxLZD3qnJ7A8khPLNxPxpIJ7pHn3jLpsE'})
        expect(body.statusCode).toBe(400)
        expect(body.text).toBe('Please enter accountId to transfer to')

    })

    it("Should return enter accountId does not exist", async () => {
       
        let accountObj = {
            amount: 5,
            accountId: '497ceb6a-7415-48bf-ae5e-078'
        }

        

        const body = await request(app).post('/account/transfer').send(accountObj).set({'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4ZTc2YWE3Mi03NWE1LTRmNzktOTY1ZC0yYWI2MWNmMGUyYmIiLCJpYXQiOjE2NDg0MjI5OTB9.WQh1zowQ0wIxLZD3qnJ7A8khPLNxPxpIJ7pHn3jLpsE'})
        expect(body.statusCode).toBe(500)
        expect(body.text).toBe('This user with this account number does not exist')

    })

})