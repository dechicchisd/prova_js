export let splitName = (urlName: string) => {
    let nameAndSurname = urlName.split('+')

    return {
        name: nameAndSurname[0].replace('-', ' '),
        surname: nameAndSurname[1].replace('-', ' ')
    }
}