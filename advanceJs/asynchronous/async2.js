const registration = () => {
    return true;
}

const payment = () => {
    return true;
}

const enroll = () => {
    console.log("You have enrolled")
}

const submitDocument = () => {
    return false;
}

const other = () => {
    console.log("Doing other things")
}


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (registration()) {
            resolve();
        } else {
            reject();
        }
    }, 2000)
})

p1.then(() => {
    console.log("Registration successfull! Proceed to payment")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (payment()) {
                resolve();
            }
            else {
                reject();
            }
        }, 3000)
    }).then(() => {
        console.log("Payment successful")
        /**
         * If you have either resolve or reject state but not both you can simply return
         * return Promise.resolve()
         * return Promise.reject()
         */
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (submitDocument()) {
                    resolve();
                }
                else {
                    reject();
                }
            }, 4000)
        }).then(() => {
            console.log("Document succcessfully submitted")
            enroll();
        }).catch(() => {
            console.log("Enrolled failed due to document submission failed")
        })
    }).catch(() => {
        console.log("There is some wrong")
    })
}).catch(() => {
    console.log("Someting went wrong")
})

setInterval(() => {
    other()
}, 1000);