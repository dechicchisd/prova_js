export let deleteUser = (users, id: number) => {
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
