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
                phone: '987123987',
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

const user = getUser()

user
    .then(function (result) {
        return getPhoneNumber(result.id)
            .then(function (result1) {
                return getAddress(result.id)
                    .then(function (result2) {
                        return {
                            id: result.id,
                            name: result.name,
                            phone: result1.phone,
                            address: result2.city
                        }
                    })
            })

    })
    .then(function (result) {
        console.log('result', result)
    })
    .catch(function (error) {
        console.error("Error", error)
    })
