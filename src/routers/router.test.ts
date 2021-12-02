import {getApp} from '../servers/server'
import request from 'supertest'

const app = getApp()

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
