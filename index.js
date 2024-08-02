function getUser() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                name: 'Batman',
            })
        }, 1000)
    })
}

function getPhoneNumber(userId) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                number: '987123987',
            })
        }, 2000)
    })
}

function getAddress(userId) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                city: 'gotham',
            })
        }, 2000)
    })
}

async function main() {
    const user = await getUser()
    const phone = await getPhoneNumber(user.id)
    const address = await getAddress(user.id)

    console.log(`
            id: ${user.id}
            Name: ${user.name}
            Phone: ${phone.number}
            Address: ${address.city}
        `)
}

main()