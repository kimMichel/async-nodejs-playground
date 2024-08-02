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

// first test using console.time - 5.008s (without Promise.all)
// second test using console.time - 3.008s (with Promise.all)

async function main() {
    console.time('playground-promise-timer')
    const user = await getUser()
    const result = await Promise.all([
        getPhoneNumber(user.id),
        getAddress(user.id)
    ])

    const phone = result[0]
    const address = result[1]

    console.log(`
            id: ${user.id}
            Name: ${user.name}
            Phone: ${phone.number}
            Address: ${address.city}
        `)

    console.timeEnd('playground-promise-timer')
}

main()