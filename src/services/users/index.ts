import {getUsersFromFile} from '../../data-access/users'

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
    deleteBody: deleted,
    deleteStatus: status,
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
    getBody: user,
    getStatus: status,
  }
}

export const getUsersService = () => {
  return {
    deleteUser,
    getAllUsers,
    getUser,
  }
}
