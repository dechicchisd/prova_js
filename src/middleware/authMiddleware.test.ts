import {getApp} from '../servers/server'
import request from 'supertest'

const app = getApp()

describe('authentication', () => {
  it('should return status code 401', async () => {
    const response = await request(app.callback()).get('/api/test')

    expect(response.status).toEqual(401)
  })

  it('should return status code 200', async () => {
    const response = await request(app.callback())
      .get('/api/test')
      .set({apitoken: 'abc'})

    expect(response.status).toEqual(200)
    // expect(response.body).toEqual('Authenticated!')
  })
})
