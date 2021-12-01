import { getApp } from '../servers/server'
import request from 'supertest'

const app = getApp();

describe('POST', () => {
    it('POST success', async () => {
        const response = await request(app.callback()).post('/').send({
            data: 'something',
        })
        expect(response.status).toEqual(200)
        expect(response.text).toEqual('Hello World')

    })
})

describe('GET', () => {
    it('GET success', async () => {
        const response = await request(app.callback()).get('/')
        expect(response.status).toEqual(200)
        expect(response.text).toEqual('Hello World')
    })
})

describe('PUT', () => {
    it('PUT success', async () => {
        const response = await request(app.callback()).put('/').send({
            data: 'something',
        })
        expect(response.status).toEqual(200)
        expect(response.text).toEqual('Hello World')

    })
})

describe('DELETE', () => {

    it('DELETE user not found', async () => {
        const response = await request(app.callback()).delete('/user/0');
        expect(response.body).toEqual({});
    })

    it('DELETE success by deleting first user from users', async () => {
        const response = await request(app.callback()).delete('/user/1');
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([
            {
                id: 1,
                name: 'a',
                surname: 'b'
            }
        ])
    })

    it('DELETE the same user two times', async () => {

        let response = await request(app.callback()).delete('/user/2');
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([
            {
                id: 2,
                name: 'c',
                surname: 'd'
            }
        ])

        response = await request(app.callback()).delete('/user/2');
        expect(response.body).toEqual({});
    })
})