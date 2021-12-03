import {getApp} from '../servers/server'
import request from 'supertest'

const app = getApp()

describe('userRouter', () => {
  describe('putUser', () => {
    it('should return the edited user', async () => {
      const response = await request(app.callback())
        .put('/users/1')
        .send({name: 'new name', surname: 'new surname'})
      expect(response.status).toEqual(200)
      expect(response.body).toEqual({
        id: 1,
        name: 'new name',
        surname: 'new surname',
      })
    })
  })

  describe('getuser', () => {
    it('should return the user with given id', async () => {
      const response = await request(app.callback()).get('/users/1')
      expect(response.status).toEqual(200)
      expect(response.body).toEqual({id: 1, name: 'name1', surname: 'surname1'})
    })
  })

  describe('getAllUsers', () => {
    it('should return all the users', async () => {
      const response = await request(app.callback()).get('/users')
      expect(response.status).toEqual(200)
      expect(response.body).toEqual({
        users: [
          {id: 1, name: 'name1', surname: 'surname1'},
          {id: 2, name: 'name2', surname: 'surname2'},
          {id: 3, name: 'name3', surname: 'surname3'},
        ],
      })
    })
  })

  describe('deleteUser', () => {
    it('DELETE user not found', async () => {
      const response = await request(app.callback()).delete('/users/0')
      expect(response.status).toEqual(404)
    })

    it('DELETE success by deleting first user from users', async () => {
      const response = await request(app.callback()).delete('/users/1')
      expect(response.status).toEqual(200)
      expect(response.body).toEqual([
        {id: 1, name: 'name1', surname: 'surname1'},
      ])
    })

    it('DELETE the same user two times', async () => {
      let response = await request(app.callback()).delete('/users/2')
      expect(response.status).toEqual(200)
      expect(response.body).toEqual([
        {
          id: 2,
          name: 'name2',
          surname: 'surname2',
        },
      ])
    })
  })
})
