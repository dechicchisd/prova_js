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
            data: 'somthing',
        })
        expect(response.status).toEqual(200)
        expect(response.text).toEqual('Hello World')

    })
})

describe('DELETE', () => {
    let users;

    beforeAll(() => {
        users = [{
            name: 'Delfino',
            surname: 'De Chicchis'
        },

        {
            name: 'Name1',
            surname: 'Surname1'
        },

        {
            name: 'Name2',
            surname: 'Surname2'
        }
        ]
    })
    it('DELETE success by deleting first user from users', async () => {
        let userTest = users;
        const response = await request(app.callback()).delete('/0');
        expect(response.status).toEqual(200);
        userTest.shift();
        expect(users).toBe(userTest);
    })
})