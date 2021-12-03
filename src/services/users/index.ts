import { getUsersFromFile } from '../../data-access/users'
import { splitName } from '../../utils'

const getAllUsers = () => {
  return getUsersFromFile()
}

const deleteUser = async (id: number) => {
  const users = await getUsersFromFile()
  const index = users.findIndex(user => user.id == id)
  let status: number = 404
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
  let status: number = 404
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

const putUser = async (id: number, nameAndSurname: string) => {
  const users = await getUsersFromFile()
  const divided = splitName(nameAndSurname)
  const index = users.findIndex(user => user.id == id)
  let status: number = 404
  let user = {}

  if (index != -1) {
    users[index].name = divided.name
    users[index].surname = divided.surname
    user = users[index]
    status = 200
  }

  return {
    body: user,
    status: status,
  }
}

export const getUsersService = () => {
  return {
    deleteUser,
    getAllUsers,
    getUser,
    putUser,
  }
}
