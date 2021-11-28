import { getApp } from '../servers/server'
import request from 'supertest'

const app = getApp();

describe('POST', () => {
    it('POST success', async () => {
        const response = await request(app.callback()).post('/').send({
            username: 'username',
            password: 'password'
        })
        expect(response.status).toEqual(200)
    })

})

describe('GET', () => {
    it('GET success', async () => {
        const response = await request(app.callback()).get('/')
        expect(response.status).toEqual(200)
        expect(response.text).toEqual('Hello World')
    })

})
