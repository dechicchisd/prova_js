export let deleteUser = (users, id: number) => {
    const index = users.findIndex(user => user.id == id);

    if (index != -1) {
        return users.splice(index, 1);
    }

    return {};
}