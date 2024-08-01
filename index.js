function getUser(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            name: 'Batman',
        })
    }, 1000)
}

function getPhoneNumber(userId, callback) {
    setTimeout(function () {
        return callback(null, {
            phone: '987123987',
        })
    }, 2000)
}

function getAddress(userId, callback) {
    setTimeout(function () {
        return callback(null, {
            city: 'gotham',
        })
    }, 2000)
}

const user = getUser(function resolveUser(error, user) {
    if (error) {
        console.error("Error on USER", error)
        return
    }
    getPhoneNumber(user.id, function resolvePhoneNumber(error1, phone) {
        if (error) {
            console.error("Error on PHONE NUMBER", error)
            return
        }
        getAddress(user.id, function resolveAddress(error2, address) {
            if (error) {
                console.error("Error on ADDRESS", error)
                return
            }

            console.log(`
                    Name: ${user.name}
                    Phone: ${phone.phone}
                    Address: ${address.city}
                `)
        })
    })
})
