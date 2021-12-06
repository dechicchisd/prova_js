import {getUsersFromFile} from '../../data-access/users'
import {User} from '../../model/users/schema'

const getAllUsers = () => {
  return getUsersFromFile()
}

const deleteUser = async (id: number) => {
  const users = await getUsersFromFile()
  const index = users.findIndex(user => user.id == id)
  let status = 404
  let deleted = {}

  if (index != -1) {
    deleted = users.splice(index, 1)
    status = 200
  }

  return {
    body: deleted,
    status: status,
  }
}

const getUser = async (id: number) => {
  const users = await getUsersFromFile()
  const index = users.findIndex(user => user.id == id)
  let status = 404
  let user = {}

  if (index != -1) {
    user = users[index]
    status = 200
  }

  return {
    body: user,
    status: status,
  }
}

const putUser = async (id: number, putUser) => {
  const users = await getUsersFromFile()
  const index = users.findIndex(user => user.id == id)
  let status = 404
  let user = {}

  if (index != -1) {
    users[index].name = putUser.name
    users[index].surname = putUser.surname
    user = users[index]
    status = 200
  }
  return {
    body: user,
    status: status,
  }
}

const createUser = async nameAndSurname => {
  const users = await getUsersFromFile()
  const size = users.length
  const newUser: User = {
    id: size + 1,
    name: nameAndSurname.name,
    surname: nameAndSurname.surname,
  }
  users.push(newUser)

  return {
    users: users,
    oldSize: size,
  }
}

export const getUsersService = () => {
  return {
    deleteUser,
    getAllUsers,
    getUser,
    putUser,
    createUser,
  }
}
